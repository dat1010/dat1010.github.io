BlakesNewDesk = function(renderer,scene,microcache){
  var group = new THREE.Group();
  var deskGeometry = new THREE.Geometry();
  var texture = microcache.getSet('blakeDeskCacheTexture', new THREE.TextureLoader().load('image/darkWoodTexture2.png'));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 2, 1 );
  var deskMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(120,50,1);
  var middleTop = new THREE.Mesh(geometrySquare,deskMaterial);
  middleTop.rotation.x = Math.PI/2;
  middleTop.position.y = -35;
  //middleTop.rotation.z = Math.PI/2;

  var leftTop = new THREE.Mesh(geometrySquare,deskMaterial);
  leftTop.rotation.x = Math.PI/2;
  leftTop.rotation.z = Math.PI/2;
  leftTop.position.y = -35;
  leftTop.position.z = 35;
  leftTop.position.x = -85;

  var rightTop = new THREE.Mesh(geometrySquare,deskMaterial);
  rightTop.rotation.x = Math.PI/2;
  rightTop.rotation.z = Math.PI/2;
  rightTop.position.y = -35;
  rightTop.position.z = 35;
  rightTop.position.x = 85;


  var leftLegGeometry = new THREE.BoxGeometry(120,130,1);
  var leftLeg = new THREE.Mesh(leftLegGeometry,deskMaterial);
  leftLeg.rotation.y = Math.PI/2;
  leftLeg.position.y = -60;
  leftLeg.position.z = 35;
  leftLeg.position.x = -110;


  var frontLegGeometry = new THREE.BoxGeometry(220,100,1);
  var frontLeg = new THREE.Mesh(frontLegGeometry,deskMaterial);
  //frontLeg.rotation.y = Math.PI/2;
  frontLeg.position.y = -85;
  frontLeg.position.z = -20;

  var rightLegGeometry = new THREE.BoxGeometry(120,100,1);
  var rightLeg = new THREE.Mesh(rightLegGeometry,deskMaterial);
  rightLeg.rotation.y = Math.PI/2;
  rightLeg.position.y = -85;
  rightLeg.position.z = 35;
  rightLeg.position.x = 110;

  var leftDeskEndGeometry = new THREE.BoxGeometry(50,100,1);
  var leftDeskEnd = new THREE.Mesh(leftDeskEndGeometry,deskMaterial)
  leftDeskEnd.position.y = -85;
  //leftDeskEnd.position.z = 60;
  leftDeskEnd.position.z = 92;
  leftDeskEnd.position.x = -85;

  var rightDeskEnd = new THREE.Mesh(leftDeskEndGeometry,deskMaterial);
  rightDeskEnd.position.y = -85;
  //leftDeskEnd.position.z = 60;
  rightDeskEnd.position.z = 92;
  rightDeskEnd.position.x = 85;

  var shelfTopGeometry = new THREE.BoxGeometry(120,22,1);
  var shelfTop = new THREE.Mesh(shelfTopGeometry,deskMaterial);
  shelfTop.rotation.x = Math.PI/2;
  shelfTop.rotation.z = Math.PI/2;
  shelfTop.position.y = 5;
  shelfTop.position.z = 35;
  shelfTop.position.x = -100;

  //var shelfmiddleGeometry = new THREE.BoxGeometry(120,22,1);
  var shelfmiddle = new THREE.Mesh(shelfTopGeometry,deskMaterial);
  shelfmiddle.rotation.x = Math.PI/2;
  shelfmiddle.rotation.z = Math.PI/2;
  shelfmiddle.position.y = -10;
  shelfmiddle.position.z = 35;
  shelfmiddle.position.x = -100;

  var shelfEndGeometry = new THREE.BoxGeometry(22,40,1);
  var shelfEnd = new THREE.Mesh(shelfEndGeometry,deskMaterial);
  shelfEnd.position.y = -15;
  //leftDeskEnd.position.z = 60;
  shelfEnd.position.z = 92;
  shelfEnd.position.x = -100;

  var shelfEnd2 = new THREE.Mesh(shelfEndGeometry,deskMaterial);
  shelfEnd2.position.y = -15;
  //leftDeskEnd.position.z = 60;
  shelfEnd2.position.z = -23;
  shelfEnd2.position.x = -100;


  group.add(shelfEnd2);
  group.add(shelfEnd);
  group.add(shelfmiddle);
  group.add(shelfTop);
  group.add(rightDeskEnd);
  group.add(leftDeskEnd);
  group.add(rightLeg);
  group.add(frontLeg);
  group.add(leftLeg);
  group.add(rightTop);
  group.add(leftTop);
  group.add(middleTop);
  return group;
}
