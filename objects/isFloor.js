ISFloor = function(renderer,scene){
  var group = new THREE.Group();
  var texture = THREE.ImageUtils.loadTexture('image/betterCheckered.png', {}, function() {
    //renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 4, 4 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(1500,10,1000);
  var square = new THREE.Mesh(geometrySquare, gateMaterial);

  group.add(square);
  return group;
}
