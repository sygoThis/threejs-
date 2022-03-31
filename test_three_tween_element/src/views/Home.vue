<template>
    <el-container >
        <el-header>Header</el-header>
        <el-main  id="container"></el-main>
          <el-footer>Footer</el-footer>
    </el-container>
</template>
<script>
import * as Three from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
    
    data() {
        return {
            camera: null,
            scene: null,
            renderer: null,
            mesh: null,
            controls:null
        };
    },
    methods: {
        init: function() {
        let container = document.getElementById('container');
        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.1,2000);
        this.camera.position.z = 1;
 
        this.scene = new Three.Scene();
        let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        let material = new Three.MeshNormalMaterial();
 
        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);
        
        let geometry1 = new Three.BoxGeometry(5, 5, 5);
        let material1 = new Three.MeshNormalMaterial();
        var mesh1 = new Three.Mesh(geometry1, material1);
            mesh1.position.x=0;
            mesh1.position.y=4;
            mesh1.position.z=2;
          this.scene.add(mesh1);
          
        this.renderer = new Three.WebGLRenderer({antialias: true,alpha:true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setClearColor(new Three.Color(0xffffff))
        container.appendChild(this.renderer.domElement);
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        // this.controls.target = new Three.Vector3(mesh1.position);
        console.info(mesh1.position)
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
         
         //监听控制器的鼠标事件，执行渲染内容
            this.controls.addEventListener('change',()=>{
                console.log(this.camera.position);
            })
        
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.controls.target=this.mesh.position;
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    },
    mounted() {
        this.init();
        this.animate();
    },
}
</script>

<style>
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    padding: 0;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  .el-container{
    height: 100%;
  }
  
  
</style>
