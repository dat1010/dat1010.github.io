ServerRoomWindow = function(renderer,scene,microcache){
  var group = new THREE.Group();
  var texture = microcache.getSet('serverRoomWindow', new THREE.TextureLoader().load('image/serverRoomWindowPane.png'));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 4, 1 );
  var windowMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometryWindow = new THREE.BoxGeometry(350,200,5.5);
  var serverWindow = new THREE.Mesh(geometryWindow, windowMaterial);
  serverWindow.rotation.y = Math.PI/2;
  serverWindow.position.y = -40;
  group.add(serverWindow);
  return group
}
