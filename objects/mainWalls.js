MainWalls = function(renderer,scene) {
  var group = new THREE.Group();
  var texture = THREE.ImageUtils.loadTexture('image/walltexture.png', {}, function() {
    //renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 2, 2 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(1500,280,5);
  var northWall = new THREE.Mesh(geometrySquare, gateMaterial);
  northWall.rotation.y = Math.PI/2;
  northWall.position.x = 500;

  //TODO will need to add windows to this later.
  var southWall = new THREE.Mesh(geometrySquare, gateMaterial);
  southWall.rotation.y = Math.PI/2;
  southWall.position.x = -500;


  var westEastGeometry = new THREE.BoxGeometry(1000,280,5);
  var westWall = new THREE.Mesh(westEastGeometry, gateMaterial);
  westWall.position.z = 750;

  var eastWall = new THREE.Mesh(westEastGeometry, gateMaterial);
  eastWall.position.z = -750;

  group.add(northWall);
  group.add(southWall);
  group.add(westWall);
  group.add(eastWall);
  return group;
}
