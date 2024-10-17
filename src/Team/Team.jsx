import { useEffect } from "react"
import "./Team.css"
import Header from "../Header/Header"
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Button from "../Button/Button";
import abhay1 from "/textures/teamImages/abhay.jpg"
import vishali from "/textures/teamImages/vishal2.jpeg"
import pranshui from "/textures/teamImages/pranshu1.jpeg"

const Team = () =>
{
    useEffect(() =>
    {


        // Canvas
        const canvas = document.querySelector('canvas.webgl2')
        // const canvas1 = document.querySelector('canvas.webgl3')

        // Scene
        const scene = new THREE.Scene()
        // const scene1 = new THREE.Scene()

        //texture-loader
        // const textureLoader = new THREE.TextureLoader()
        // const abhay = textureLoader.load("/textures/teamImages/abhay1.jpg")
        // abhay.minFilter = THREE.LinearFilter
        // abhay.generateMipmaps = false

        /**
         * Objects
         */

        
        // const circle1 = new THREE.Mesh(
        //     new THREE.BoxGeometry(1.2, 1.2,0.05,)
            
        //     ,
        //     new THREE.MeshBasicMaterial({
        //         map: abhay,
                
        //     })
        // )
        // circle1.position.y = 0.7
        
        // scene1.add(circle1)
        
        /**
         * Particles
         */
        // Geometry
        const particlesGeometry = new THREE.PlaneGeometry(10,4, 20, 10)

        // Material
        const particlesMaterial = new THREE.PointsMaterial()

        particlesMaterial.size = 0.01
        particlesMaterial.sizeAttenuation = true

        particlesMaterial.color = new THREE.Color('white')

        // particlesMaterial.transparent = true
        // particlesMaterial.alphaMap = particleTexture
        // particlesMaterial.alphaTest = 0.01
        // particlesMaterial.depthTest = false
        particlesMaterial.depthWrite = false
        particlesMaterial.blending = THREE.AdditiveBlending

        

        // Points
        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        // particles.position.y = 0.7
        // particles.position.x = -0.5
        scene.add(particles)

        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth/1.5,
            height: window.innerHeight/2
        }

        window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth/1.5
            sizes.height = window.innerHeight/2

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
            // camera1.aspect = sizes.width / sizes.height
            // camera1.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            // renderer1.setSize(sizes.width, sizes.height)
            // renderer1.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera group
         */
        const cameraGroup = new THREE.Group()
        scene.add(cameraGroup)
        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 3
        cameraGroup.add(camera)

        // const camera1 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        // camera1.position.z = 3
        // scene1.add(camera)

        // Controls
        // const controls = new OrbitControls( camera1, canvas1);
        // controls.enableZoom = false

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // const renderer1 = new THREE.WebGLRenderer({
        //     canvas: canvas1,
        //     alpha: true,
        // })
        // renderer1.setSize(sizes.width, sizes.height)
        // renderer1.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Cursor
         */
        const cursor = {}
        cursor.x = 0
        cursor.y = 0

        window.addEventListener('mousemove', (event) =>
        {
            cursor.x = event.clientX / sizes.width - 0.5
            cursor.y = event.clientY / sizes.height - 0.5
        })
        

        /**
         * Animate
         */
        const clock = new THREE.Clock()
        let previousTime = 0
        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime

            //Update controls
            // controls.update();

            // //Animate circles
            // circle1.rotation.x = elapsedTime*0.1
            // circle1.rotation.y = elapsedTime*0.2
            

            // Animate camera

            const parallaxX = cursor.x * 0.7
            const parallaxY = - cursor.y * 0.3
            cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 3.5 * deltaTime
            cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 1.5* deltaTime
            // camera1.position.x += (parallaxX - camera.position.x) * 3 * deltaTime
            // camera1.position.y += (parallaxY - camera.position.y) * 0.5* deltaTime

            // Render
            renderer.render(scene, camera)
            // renderer1.render(scene1, camera1)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()
    }, [])

    return(
        <div className="team text-slate-12 background font-sans pi1">
            <Header/>
            <div className="teamPage text-center flexC alignC">
                
                {/* <div className="text-medium1 text-slate-11 mgT5">"Made by one-nighter for one-nighters"</div> */}
                <div className="abhaySection">
                    <div className="relative">
                        <canvas className="webgl2"></canvas>
                        <div className="abhayImage"><img src={abhay1} alt="abhay image" /></div>
                    </div>
                    <div className="font-effect-hero antialiased font-gradient text-large noWrap text-center abhay flexC gap0 alignC">
                        <div className="">Abhay Pratap</div>
                        <div className="text-medium1">[creator, maintainer]</div>
                    </div>
                </div>
                <div className="mainContributors flexC gap4">
                    <div className="flexC gap1 alignC">
                        <div className="text-medium ">Backed by incredible contributers</div>
                        <div className="text-sm1 text-slate-11">Helped in making every request come true </div>
                    </div>
                    <div className="flex mainContributorBox">
                        <div className="contributorM">
                            <img src={pranshui} alt="pranshu image" className="contributorMi"/>
                            <div className="text-medium1">Pranshu Gupta</div>
                            <div className="text-sm1 text-slate-11">[ Resource Contributor ]</div>
                            <div className="text-sm1 text-slate-11">[ Video editor ]</div>                    
                        </div>
                        <div className="contributorM">
                            <img src={vishali} alt="vishal image" className="contributorMi"/>
                            <div className="text-medium1">Vishal Mangrole</div>
                            <div className="text-sm1 text-slate-11">[ Resource Contributor ]</div> 
                        </div>

                    </div>
                </div>
                <div className="thanksSection flexC gap2 alignC">
                    <div className="text-medium">Thanks for the help</div>
                    <div className="flexC gap1">
                        <div><span className="font-medium">Abhinav Sahu (2022-2026)</span> for providing pyq's and notes of cse SEM-III </div>
                        <div><span className="font-medium">Kashish Jakhodiya (2023-2027) </span> for providing notes of cse SEM-III</div>
                        <div><span className="font-medium">Shruti Gangrade (2022-2026)  </span> for providing notes of entc SEM-III</div>
                        <div><span className="font-medium">Vidhan Agrawal (2023-2027) </span> for providing notes of it SEM-III</div>
                        <div><span className="font-medium">Aakhya Sharma (2023-2027) </span> for providing pyq of cse SEM-I</div>
                        <div><span className="font-medium">Hrishika jain (2023-2027) </span> for providing notes of cse SEM-I and SEM-II</div>
                    </div>
                    <a href="https://www.instagram.com/ietstudyhub?igsh=MWR5b3FnbWoyNTl6aQ==" className="textDecNone"><Button text="Contribute >" version={1} /></a>
                </div>
            </div>
            
            
        </div>
       
    )
}

export default Team