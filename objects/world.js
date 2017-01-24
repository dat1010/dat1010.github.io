World = function(renderer,scene){
  var group = new THREE.Group();
  var texture = THREE.ImageUtils.loadTexture('image/cement.png', {}, function() {
    //renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 5,5 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(100,10,100);
  var square = new THREE.Mesh(geometrySquare, gateMaterial);
  //square.rotation. = Math.PI/2
  group.add(square);
  return group;
}
