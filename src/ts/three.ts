import * as THREE from "three"
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
const sceneDiv = document.querySelector("[data-3d-scene]")
if (sceneDiv) {
  sceneDiv.appendChild(renderer.domElement)
  updateRendererSize()
} else {
  console.error('Div with attribute "data-3d-scene" not found')
}

const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
directionalLight.position.set(0, 1, 1)
scene.add(directionalLight)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

const loader = new GLTFLoader()
let model: THREE.Group | undefined

loader.load(
  "/3d/trump.gltf",
  (gltf: GLTF) => {
    model = gltf.scene
    scene.add(model)

    const box = new THREE.Box3().setFromObject(model)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())

    const maxDim = Math.max(size.x, size.y, size.z)
    const fov = camera.fov * (Math.PI / 180)
    let cameraZ = Math.abs(maxDim / (2 * Math.tan(fov / 2)))

    cameraZ *= 1.4
    camera.position.z = cameraZ

    model.position.x -= center.x
    model.position.y -= center.y - size.y / 60
    model.position.z -= center.z

    const scale = 0.475 / maxDim
    model.scale.set(scale, scale, scale)
  },
  undefined,
  (error: unknown) => {
    if (error instanceof ErrorEvent) {
      console.error(error.message)
    } else {
      console.error(error)
    }
  },
)

function animate() {
  requestAnimationFrame(animate)

  if (model) {
    model.rotation.y += 0.01
  }

  renderer.render(scene, camera)
}

function updateRendererSize() {
  const width = getRendererWidth()
  const height = getRendererHeight()
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

function getRendererWidth() {
  if (window.innerWidth > 1536) {
    return 1048
  } else if (window.innerWidth > 1280) {
    return 748
  } else if (window.innerWidth > 1024) {
    return 648
  } else {
    return 475
  }
}

function getRendererHeight() {
  if (window.innerWidth > 1536) {
    return 1069
  } else if (window.innerWidth > 1280) {
    return 769
  } else if (window.innerWidth > 1024) {
    return 669
  } else {
    return 472
  }
}

window.addEventListener("resize", updateRendererSize)

updateRendererSize()
animate()
