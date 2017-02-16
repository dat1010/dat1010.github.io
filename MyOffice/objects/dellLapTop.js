DellLapTop = function(renderer,scene,texturePath,screenLength,screenWidth,closed,microcache){
  closed = closed || false;
  var group = new THREE.Group();

  var texture =   microcache.getSet('bumpyPlasticCacheTexture', new THREE.TextureLoader().load('image/bumpy-black-plastic-texture.png'));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1 );
  var frontTexture = new THREE.TextureLoader().load(texturePath);


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


  var keyboardTexture = microcache.getSet('laptopKeyBoardCacheTexture',new THREE.TextureLoader().load('image/dellKeyBoard.png'));

  keyboardTexture.wrapS = THREE.RepeatWrapping;
  keyboardTexture.wrapT = THREE.RepeatWrapping;
  keyboardTexture.repeat.set( 1, 1 );
  var keboardMaterialArray = [];
  keboardMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  keboardMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  keboardMaterialArray.push( new THREE.MeshBasicMaterial( {map: keyboardTexture}  ) );
  keboardMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  //Front
  keboardMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture} ) );
  keboardMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  var keyboardMaterials = new THREE.MeshFaceMaterial( keboardMaterialArray );

  //var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  //(45,30,2);
  var geometrySquare = new THREE.BoxGeometry(screenLength,screenWidth,0.3);
  var screen = new THREE.Mesh(geometrySquare, cubeMaterials);
  screen.rotation.x = -Math.PI/12;

  var geometryKeyboard = new THREE.BoxGeometry(screenLength,0.7,screenWidth);
  var keyboard = new THREE.Mesh(geometryKeyboard, keyboardMaterials);
  keyboard.position.y = -8.5;
  keyboard.position.z = 10.6;

  if (closed == true){
    //it works! maybe later ill make it able to be closed
    //screen.rotation.x = -Math.PI;
  }


  group.add(screen);
  group.add(keyboard);
  return group;
}
