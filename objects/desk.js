DogBoneDesk = function(renderer,scene){
  var group = new THREE.Group();
  var texture = THREE.ImageUtils.loadTexture('image/deskTexture.png', {}, function() {
    //renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 5, 5 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(250,84,0.5);
  var middleLeg = new THREE.Mesh(geometrySquare, gateMaterial);

  var endLegGeometry = new THREE.BoxGeometry(70,84,0.5);
  var endLeg1 = new THREE.Mesh(endLegGeometry,gateMaterial);
  endLeg1.position.x = 150;
  endLeg1.position.z = -23;
  endLeg1.rotation.y = Math.PI/4

  var endLeg2 = new THREE.Mesh(endLegGeometry,gateMaterial);
  endLeg2.position.x = 150;
  endLeg2.position.z = 23;
  endLeg2.rotation.y = -Math.PI/4

  var rightLegGroup = new THREE.Group();
  rightLegGroup.add(endLeg1);
  rightLegGroup.add(endLeg2);

  var leftLegGroup = new THREE.Group();
  leftLegGroup = rightLegGroup.clone();
  leftLegGroup.rotation.y = Math.PI;



  /*Divider Group*/
  var dividerTexture = THREE.ImageUtils.loadTexture('image/pinBoard.png', {}, function() {
    //renderer.render(scene);
  });
  dividerTexture.wrapS = THREE.RepeatWrapping;
  dividerTexture.wrapT = THREE.RepeatWrapping;
  dividerTexture.repeat.set( 4, 4 );
  var dividerMaterial = new THREE.MeshBasicMaterial({map: dividerTexture});
  var geometrySquare = new THREE.BoxGeometry(250,50,1);
  var middleDivider = new THREE.Mesh(geometrySquare, dividerMaterial);
  middleDivider.position.y = 67;

  var endDividerGeometry = new THREE.BoxGeometry(70,50,1);
  var endDivider1 = new THREE.Mesh(endDividerGeometry,dividerMaterial);
  endDivider1.position.x = 150;
  endDivider1.position.z = -23;
  endDivider1.position.y = 67;
  endDivider1.rotation.y = Math.PI/4

  var endDivider2 = new THREE.Mesh(endDividerGeometry,dividerMaterial);
  endDivider2.position.x = 150;
  endDivider2.position.z = 23;
  endDivider2.position.y = 67;
  endDivider2.rotation.y = -Math.PI/4

  var rightDividerGroup = new THREE.Group();
  rightDividerGroup.add(endDivider1);
  rightDividerGroup.add(endDivider2);

  var leftDividerGroup = new THREE.Group();
  leftDividerGroup = rightDividerGroup.clone();
  leftDividerGroup.rotation.y = Math.PI;



  var deskEndGeometry = new THREE.BoxGeometry(61.5,2,50);
  var deskEnd1 = new THREE.Mesh(deskEndGeometry,gateMaterial);
  deskEnd1.position.y = 42;
  deskEnd1.position.x = 155;
  deskEnd1.position.z = 30;
  //deskEnd.rotation.y = Math.PI/2;
  deskEnd1.rotation.y = Math.PI/4;

  var deskEnd2 = new THREE.Mesh(deskEndGeometry,gateMaterial);
  deskEnd2.position.y = 42;
  deskEnd2.position.x = 155;
  deskEnd2.position.z = -30;
  deskEnd2.rotation.y = -Math.PI/4;

  var rightDeskEnd = new THREE.Group();
  rightDeskEnd.add(deskEnd1);
  rightDeskEnd.add(deskEnd2);
  var leftDeskEnd = new THREE.Group();
  leftDeskEnd = rightDeskEnd.clone();
  leftDeskEnd.rotation.y = Math.PI;

  var geometryCylinder = new THREE.CylinderGeometry(32,32,2,32);
  var endCircle1 = new THREE.Mesh(geometryCylinder, gateMaterial);
  endCircle1.position.y = 42;
  endCircle1.position.x = 175;
  endCircle1.position.z = 50;

  var endCircle2 = new THREE.Mesh(geometryCylinder, gateMaterial);
  endCircle2.position.y = 42;
  endCircle2.position.x = 175;
  endCircle2.position.z = -50;

  var rightCircleGroup = new THREE.Group();
  rightCircleGroup.add(endCircle1);
  rightCircleGroup.add(endCircle2);
  var leftCircleGroup = new THREE.Group()
  leftCircleGroup = rightCircleGroup.clone();
  leftCircleGroup.rotation.y = Math.PI;

  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(370,2,90);
  var square = new THREE.Mesh(geometrySquare, gateMaterial);
  square.position.y = 42;

  var rightCabinet = new FilingCabinet(renderer,scene);
  var leftCabinet = new FilingCabinet(renderer,scene);
  //rightCabinet.rotation.y = Math.PI/2;
  rightCabinet.position.z = 22.5;
  rightCabinet.position.x = 15;
  leftCabinet.position.z = 22.5;
  leftCabinet.position.x = -15;

  var cabinetGroup = new THREE.Group();
  cabinetGroup.add(rightCabinet);
  cabinetGroup.add(leftCabinet);

  var otherCabinetGroup = new THREE.Group();
  otherCabinetGroup = cabinetGroup.clone();
  otherCabinetGroup.rotation.y = Math.PI;

  group.add(middleLeg);
  group.add(rightLegGroup);
  group.add(leftLegGroup);
  group.add(middleDivider);
  group.add(rightDividerGroup);
  group.add(leftDividerGroup);
  group.add(rightCircleGroup);
  group.add(leftCircleGroup);
  group.add(rightDeskEnd);
  group.add(leftDeskEnd);
  group.add(square);
  group.add(cabinetGroup);
  group.add(otherCabinetGroup);
  return group;
}
