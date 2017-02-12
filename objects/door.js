Door = function(renderer,scene,microcache){
  var group = new THREE.Group();
  var texture = microcache.getSet('doorTexture', new THREE.TextureLoader().load('image/door2.png'));
  var doorMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometryDoor = new THREE.BoxGeometry(100,200,5.5);
  var door = new THREE.Mesh(geometryDoor, doorMaterial);
  door.rotation.y = Math.PI/2;
  door.position.y = -45;
  group.add(door);
  return group
}
