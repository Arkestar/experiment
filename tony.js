var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x000000 );
document.body.appendChild( renderer.domElement );

// Creation de la sphere
var sphereGeometry = new THREE.SphereGeometry( 4, 5, 5 );
var sphereMaterial = new THREE.MeshBasicMaterial( {
  color: 0xFFFFFF,
  wireframe: true
} );
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );

// Creation de la sphere numéro 2 !
var sphereGeometry_bis = new THREE.SphereGeometry( 8, 8, 2 );
var sphereMaterial_bis = new THREE.MeshBasicMaterial( {
  color: 0xFFFFFF,
  wireframe: true
} );
var sphere_bis = new THREE.Mesh( sphereGeometry_bis, sphereMaterial_bis );
scene.add( sphere_bis );

/* // Creation du noyau
var sphereGeometry_noyau = new THREE.SphereGeometry( 1, 32, 32, 0, 6.3, 0, 3.1 );
var sphereMaterial_noyau = new THREE.MeshBasicMaterial( {
  color: 0xFFFFFF,
} );
var noyau = new THREE.Mesh( sphereGeometry_noyau, sphereMaterial_noyau );
scene.add( noyau ); */

// Creation des particules
var particlesGeometry = new THREE.SphereGeometry( 2, 4, 2, 0, 6.3, 0, 3.1 );
var particleNumber = 10000;
for ( var p = 0; p < particleNumber; p++ ) {
  var vertex = new THREE.Vector3();
  vertex.x = Math.random() * 500 - 200;
  vertex.y = Math.random() * 500 - 200;
  vertex.z = Math.random() * 500 - 200;
  particlesGeometry.vertices.push( vertex );
}
var particlesMaterial = new THREE.PointsMaterial( {
    color: 0xffffff,
    size: 0.8,
    transparent: true,
  } );
var geoparticles = new THREE.Points( particlesGeometry, particlesMaterial );
scene.add( geoparticles );

// Recule la camera sur l'axe Z et focus sur le centre de la sphere
camera.position.z = 20;
camera.lookAt( sphere );

// Caméra souris
var controls = new THREE.OrbitControls( camera, renderer.domElement )
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 0.5

// Animation
function render() {
  requestAnimationFrame( render );

  sphere.rotation.x += 0.02;
  sphere.rotation.y += 0.02;
  sphere_bis.rotation.x += 0.01;
  sphere_bis.rotation.y += 0.01;
  geoparticles.rotation.x += 0.005;
  geoparticles.rotation.y += 0.005;

  renderer.render( scene, camera );

  controls.update()
}

render()

render();