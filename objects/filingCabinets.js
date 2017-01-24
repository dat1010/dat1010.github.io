FilingCabinet = function(renderer,scene){
  var group = new THREE.Group();
  var texture = THREE.ImageUtils.loadTexture('image/cement.png', {}, function() {
    //renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 1, 1 );
  var frontTexture = THREE.ImageUtils.loadTexture('image/fileCabinet.png', {}, function() {
    //renderer.render(scene);
  });
  frontTexture.wrapS = THREE.RepeatWrapping;
  frontTexture.wrapT = THREE.RepeatWrapping;
  frontTexture.repeat.set( 1, 1 );
  // For using solid colors
  //  var gateMaterial = new THREE.MeshBasicMaterial({ color: 0x8833ff });
  var cubeMaterialArray = [];
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  //Front
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: frontTexture} ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  var cubeMaterials = new THREE.MeshFaceMaterial( cubeMaterialArray );

  //var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(30,84,45);
  var middleLeg = new THREE.Mesh(geometrySquare, cubeMaterials);


  group.add(middleLeg);
  return group;
}
