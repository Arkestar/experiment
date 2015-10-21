var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x000000 );
document.body.appendChild( renderer.domElement );

// Creation de la sphere
var sphereGeometry = new THREE.SphereGeometry( 5, 5, 5 );
var sphereMaterial = new THREE.MeshBasicMaterial( {
  color: 0xFFFFFF,
  wireframe: true
} );
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );

// Creation des particules
var particlesGeometry = new THREE.SphereGeometry( 2, 4, 2, 0, 6.3, 0, 3.1 );
var particleNumber = 9000;

for ( var p = 0; p < particleNumber; p++ ) {
  var vertex = new THREE.Vector3();
  vertex.x = Math.random() * 500 - 100;
  vertex.y = Math.random() * 500 - 100;
  vertex.z = Math.random() * 500 - 100;

  particlesGeometry.vertices.push( vertex );
}

var particlesMaterial = new THREE.PointsMaterial( {
  color: 0xFFFFFF,
  size: 2,
} );

var geoparticles = new THREE.Points( particlesGeometry, particlesMaterial );
scene.add( geoparticles );

// Recule la camera sur l'axe Z et focus sur le centre de la sphere
camera.position.z = 15;
camera.lookAt( sphere );

// Animation
function render() {
  requestAnimationFrame( render );
  sphere.rotation.x += 0.05;
  sphere.rotation.y += 0.05;
  geoparticles.rotation.x += 0.005;
  geoparticles.rotation.y += 0.005;
  renderer.render( scene, camera );
}

render();