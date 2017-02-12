Monitor = function(renderer,scene,texturePath,screenLength,screenWidth,microcache){
  var group = new THREE.Group();
  var texture =  microcache.getSet('bumpyPlasticCacheTexture', new THREE.TextureLoader().load('image/bumpy-black-plastic-texture.png'));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1 );

  var frontTexture = microcache.getSet(texturePath, new THREE.TextureLoader().load(texturePath));

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
  //(45,30,2);
  var geometrySquare = new THREE.BoxGeometry(screenLength,screenWidth,2);
  var screen = new THREE.Mesh(geometrySquare, cubeMaterials);
  screen.rotation.x = -Math.PI/32;


  var standMaterial = new THREE.MeshBasicMaterial({map: texture});
  var standGeometry = new THREE.BoxGeometry(10,10,3);
  var stand = new THREE.Mesh(standGeometry,standMaterial);
  stand.position.y = -18;
  stand.rotation.y = Math.PI;
  var bottomStandGeometry = new THREE.BoxGeometry(20,2,8);
  var bottonStand = new THREE.Mesh(bottomStandGeometry,cubeMaterials);
  bottonStand.position.y = -22;
  bottonStand.rotation.y = Math.PI;
  //group.add(stand);
  //group.add(bottonStand);
  //group.add(screen);
  //http://stackoverflow.com/questions/30245990/how-to-merge-two-geometries-or-meshes-using-three-js-r71
  //Work on this more. must be efficient
  var singleGeometry = new THREE.Geometry();
  stand.updateMatrix();
  singleGeometry.merge(stand.geometry, stand.matrix);
  bottonStand.updateMatrix();
  singleGeometry.merge(bottonStand.geometry,bottonStand.matrix);
  screen.updateMatrix();
  singleGeometry.merge(screen.geometry,screen.matrix);
  singleGeometry.mergeVertices();
  var mesh = new THREE.Mesh(singleGeometry, cubeMaterials);
  mesh.geometry.computeFaceNormals();
  mesh.geometry.computeVertexNormals();
  group.add(mesh);
  return group;
}
