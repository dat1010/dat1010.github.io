KeyBoard = function(renderer,scene,keyboardPath){
  keyboardPath = keyboardPath || 'image/keyboard.png';
  var group = new THREE.Group();
  var texture = new THREE.TextureLoader().load('image/bumpy-black-plastic-texture.png');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1 );
  var frontTexture = new THREE.TextureLoader().load(keyboardPath);


  frontTexture.wrapS = THREE.RepeatWrapping;
  frontTexture.wrapT = THREE.RepeatWrapping;
  frontTexture.repeat.set( 1, 1 );
  // For using solid colors
  //  var gateMaterial = new THREE.MeshBasicMaterial({ color: 0x8833ff });
  var cubeMaterialArray = [];
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: frontTexture}  ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  //Front
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture} ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  var cubeMaterials = new THREE.MeshFaceMaterial( cubeMaterialArray );
  var keyboardThinkness = 1.5;
  if (keyboardPath == 'image/keyboard.png'){
    keyboardThinkness = 0.3;
  }
  var geometryKeyboard = new THREE.BoxGeometry(28,keyboardThinkness,8.5);
  var keyboard = new THREE.Mesh(geometryKeyboard, cubeMaterials);

  group.add(keyboard);
  return group;
}
