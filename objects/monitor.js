Monitor = function(renderer,scene,texturePath,screenLength,screenWidth){
  var group = new THREE.Group();
  var texture = THREE.ImageUtils.loadTexture('image/bumpy-black-plastic-texture.png', {}, function() {
    //renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1 );
  var frontTexture = THREE.ImageUtils.loadTexture(texturePath, {}, function() {
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
  //(45,30,2);
  var geometrySquare = new THREE.BoxGeometry(screenLength,screenWidth,2);
  var screen = new THREE.Mesh(geometrySquare, cubeMaterials);
  screen.rotation.x = -Math.PI/32;


  var standMaterial = new THREE.MeshBasicMaterial({map: texture});
  var standGeometry = new THREE.BoxGeometry(10,10,3);
  var stand = new THREE.Mesh(standGeometry,standMaterial);
  stand.position.y = -18;
  //stand.position.z = -1.8;
  var bottomStandGeometry = new THREE.BoxGeometry(20,2,8);
  var bottonStand = new THREE.Mesh(bottomStandGeometry,standMaterial);
  bottonStand.position.y = -22;

  group.add(stand);
  group.add(bottonStand);
  group.add(screen);
  return group;
}
