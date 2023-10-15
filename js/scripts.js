//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

//Load the file
const loader = new THREE.ObjectLoader();

loader.load(
	// resource URL
	"https://github.io/LeoGreed2909/assets/bar_back.gltf",

	// onLoad callback
	// Here the loaded data is assumed to be an object
	function ( gltf ) {
		// Add the loaded object to the scene
		scene.add( model );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.error( 'An error happened' );
	},

    animate());
