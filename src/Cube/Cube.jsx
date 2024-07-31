import "./Cube.css"
import { useEffect } from "react"
import { render } from "react-dom"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {FontLoader} from "three/examples/jsm/loaders/FontLoader"
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"
// import * as dat from 'lil-gui'

const Cube = () =>{
  useEffect(()=>{
    
    /**
     * Sizes
     */

    const sizes = {
      
    }


    if(window.innerWidth>=1100){
      sizes.width = window.innerWidth/3
      sizes.height = window.innerHeight/1.5
    }else if(window.innerWidth>768 && window.innerWidth<1100){
      sizes.width = window.innerWidth/2.5
      sizes.height = window.innerHeight/1.5
    }else if(window.innerWidth>450 && window.innerWidth<=768){
      sizes.width = window.innerWidth/2.5
      sizes.height = window.innerHeight/3
    }else if(window.innerWidth<=450){
      sizes.width = window.innerWidth/1.5
      sizes.height = window.innerHeight/3
    }

  /**
   * Base
   */
  // Debug
  // const gui = new dat.GUI()

  // Canvas
  const canvas = document.querySelector('canvas.webgl')

  // Scene
  const scene = new THREE.Scene()

  /**
   * Textures
   */
  const textureLoader = new THREE.TextureLoader()
  const matcapTexture1 = textureLoader.load("/textures/matcaps/3.png")
  // const particleTexture = textureLoader.load("/textures/particles/2.png")

  /**
   * Particles
   */
  //Geometry
  const particlesGeometry = new THREE.SphereGeometry(1.6, 32,32)
  // console.log(particlesGeometry)
  // const particlesGeometry = new THREE.BoxGeometry(2,2,2,15,15,15)
  // const particlesGeometry = new THREE.TetrahedronGeometry(1.5, 20)
  // const particlesGeometry = new THREE.BufferGeometry()

  // const count = 2000

  // const positionArray = new Float32Array(count*3)
  // const colorsArray = new Float32Array(count*3)

  // for (let i = 0; i < count*3; i++) {
  //     positionArray[i] = (Math.random()-0.5)*2
  //     colorsArray[i] = Math.random()
  // }
  // const positionAttribute = new THREE.BufferAttribute(positionArray, 3)
  // const colorsAttribute = new THREE.BufferAttribute(colorsArray, 3)

  // particlesGeometry.setAttribute("color", colorsAttribute)
  // particlesGeometry.setAttribute("position", positionAttribute)

  //Material
  const particlesMaterial = new THREE.PointsMaterial({
      size:0.001,
      sizeAttenuation: true,
      color: "white"
  })
  // particlesMaterial.color = new THREE.Color("#ff88cc")
  // particlesMaterial.alphaMap = particleTexture
  // particlesMaterial.transparent = true
  // // particlesMaterial.alphaTest = 0.001
  particlesMaterial.depthWrite = false
  particlesMaterial.blending = THREE.AdditiveBlending
  // particlesMaterial.vertexColors = true

  //Points
  const particles = new THREE.Points(particlesGeometry, particlesMaterial)

  scene.add(particles)

  
  

  window.addEventListener('resize', () =>
  {
      
      // Update sizes
      
      if(window.innerWidth>=1100){
        sizes.width = window.innerWidth/3
        sizes.height = window.innerHeight/1.5
      }else if(window.innerWidth>768 && window.innerWidth<1100){
        sizes.width = window.innerWidth/2.5
        sizes.height = window.innerHeight/1.5
      }else if(window.innerWidth>450 && window.innerWidth<=768){
        sizes.width = window.innerWidth/2.5
        sizes.height = window.innerHeight/3
      }else if(window.innerWidth<=450){
        sizes.width = window.innerWidth/1.5
        sizes.height = window.innerHeight/3
      }
      

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.z = 3
  scene.add(camera)

  // Controls
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.enableZoom = false

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
  })
  renderer.setSize(sizes.width, sizes.height)
  
  // renderer.setClearColor("#05050a")
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  /**
   * 3d-text
   */
  const fontLoader = new FontLoader()
  fontLoader.load(
    "/helvetiker_regular.typeface.json",
    (font) =>
    {
      const textGeometry = new TextGeometry(
        "I E T STUDY HUB",
        {
          font:font,
          size:0.22,
          height:0.05,
          curveSegments:12,
          bevelEnabled:true,
          bevelThickness: 0.03,
          bevelSize:0.02,
          bevelOffset:0,
          bevelSegments:5,
        }
      )
      textGeometry.center()
      const textMaterial = new THREE.MeshMatcapMaterial()
      textMaterial.matcap = matcapTexture1
      const text = new THREE.Mesh(textGeometry, textMaterial)

      scene.add(text)
    }
  )


  /**
   * Animate
   */
  const clock = new THREE.Clock()

  const tick = () =>
  {
      const elapsedTime = clock.getElapsedTime()
      //Update particles
      particles.rotation.y = elapsedTime*0.05
      
      
      //Update particles
      
      // for(let i = 0; i < count; i++){
      //     const i3 = i*3
      //     const x = particlesGeometry.attributes.position.array[i3]
      //     particlesGeometry.attributes.position.array[i3+1] = Math.sin(elapsedTime+x)*0.8
      // }

      // particlesGeometry.attributes.position.needsUpdate = true

      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
  }

  tick()
  })

  return(
    <canvas className="webgl"></canvas>
  )
}

export default Cube