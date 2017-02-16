SupportCabinet = function(renderer,scene,microcache){
  var group = new THREE.Group();
  var texture =  microcache.getSet('bumpyPlasticCacheTexture', new THREE.TextureLoader().load('image/bumpy-black-plastic-texture.png'));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1 );

  var frontTexture = microcache.getSet('cabinetCacheTexture', new THREE.TextureLoader().load('image/cabinetBlack.png'));

  frontTexture.wrapS = THREE.RepeatWrapping;
  frontTexture.wrapT = THREE.RepeatWrapping;
  frontTexture.repeat.set( 24, 1 );
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
  //(45,30,2);
  var geometrySquare = new THREE.BoxGeometry(680,50,50);
  var front = new THREE.Mesh(geometrySquare, cubeMaterials);



  group.add(front);
  return group;
}
