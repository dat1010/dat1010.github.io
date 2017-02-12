DogBoneDesk = function(renderer,scene,microcache){
  var group = new THREE.Group();
  var singleGeometry = new THREE.Geometry();
  var deskGeometry = new THREE.Geometry();
  var texture = microcache.getSet('deskCacheTexture', new THREE.TextureLoader().load('image/deskTexture.png'));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 5, 5 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(250,84,0.5);
  var middleLeg = new THREE.Mesh(geometrySquare);
  middleLeg.updateMatrix();
  deskGeometry.merge(middleLeg.geometry, middleLeg.matrix)

  var endLegGeometry = new THREE.BoxGeometry(70,84,0.5);
  var endLeg1 = new THREE.Mesh(endLegGeometry,gateMaterial);
  endLeg1.position.x = 150;
  endLeg1.position.z = -23;
  endLeg1.rotation.y = Math.PI/4;
  endLeg1.updateMatrix();
  deskGeometry.merge(endLeg1.geometry, endLeg1.matrix)

  var endLeg2 = new THREE.Mesh(endLegGeometry,gateMaterial);
  endLeg2.position.x = 150;
  endLeg2.position.z = 23;
  endLeg2.rotation.y = -Math.PI/4
  endLeg2.updateMatrix();
  deskGeometry.merge(endLeg2.geometry, endLeg2.matrix)


  var otherEndLeg1 = new THREE.Mesh(endLegGeometry,gateMaterial);
  otherEndLeg1.position.x = -150;
  otherEndLeg1.position.z = 23;
  otherEndLeg1.rotation.y = Math.PI/4;
  otherEndLeg1.updateMatrix();
  deskGeometry.merge(otherEndLeg1.geometry, otherEndLeg1.matrix)

  var otherEndLeg2 = new THREE.Mesh(endLegGeometry,gateMaterial);
  otherEndLeg2.position.x = -150;
  otherEndLeg2.position.z = -23;
  otherEndLeg2.rotation.y = -Math.PI/4
  otherEndLeg2.updateMatrix();
  deskGeometry.merge(otherEndLeg2.geometry, otherEndLeg2.matrix)

  //var rightLegGroup = new THREE.Group();
  //rightLegGroup.add(endLeg1);
  //rightLegGroup.add(endLeg2);

  /*var leftLegGroup = new THREE.Group();
  leftLegGroup = rightLegGroup.clone();
  leftLegGroup.rotation.y = Math.PI;*/


  /*Divider Group*/

  var dividerTexture = microcache.getSet('deskpinBoardCacheTexture', new THREE.TextureLoader().load('image/pinBoard.png'));
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

  /*var rightDividerGroup = new THREE.Group();
  rightDividerGroup.add(endDivider1);
  rightDividerGroup.add(endDivider2);*/

  endDivider1.updateMatrix();
  singleGeometry.merge(endDivider1.geometry, endDivider1.matrix);
  endDivider2.updateMatrix();
  singleGeometry.merge(endDivider2.geometry, endDivider2.matrix);

  var otherDividerEnd1 = new THREE.Mesh(endDividerGeometry);
  otherDividerEnd1.position.x = -150;
  otherDividerEnd1.position.z = -23;
  otherDividerEnd1.position.y = 67;
  otherDividerEnd1.rotation.y = -Math.PI/4;
  otherDividerEnd1.updateMatrix();
  singleGeometry.merge(otherDividerEnd1.geometry, otherDividerEnd1.matrix);

  var otherDividerEnd2 = new THREE.Mesh(endDividerGeometry);
  otherDividerEnd2.position.x = -150;
  otherDividerEnd2.position.z = 23;
  otherDividerEnd2.position.y = 67;
  otherDividerEnd2.rotation.y = Math.PI/4;
  otherDividerEnd2.updateMatrix();
  singleGeometry.merge(otherDividerEnd2.geometry, otherDividerEnd2.matrix);
  //scene.add(otherDividerEnd);


  /*var otherEndDevider1 = new THREE.Mesh();

  otherEndDevider1 = endDivider1.clone();
  otherEndDevider1.position.x = 150;
  otherEndDevider1.position.z = -23;
  otherEndDevider1.position.y = -67;*/
  //rotateAboutWorldAxis(otherEndDevider1,y,Math.PI)
  //otherEndDevider1.rotation.y = -Math.PI/4;
  //scene.add(otherEndDevider1);
  /*var leftDividerGroup = new THREE.Group();
  leftDividerGroup = rightDividerGroup.clone();
  leftDividerGroup.rotation.y = Math.PI;*/


  var deskEndGeometry = new THREE.BoxGeometry(61.5,2,50);
  var deskEnd1 = new THREE.Mesh(deskEndGeometry);
  deskEnd1.position.y = 42;
  deskEnd1.position.x = 155;
  deskEnd1.position.z = 30;
  //deskEnd.rotation.y = Math.PI/2;
  deskEnd1.rotation.y = Math.PI/4;
  deskEnd1.updateMatrix();
  deskGeometry.merge(deskEnd1.geometry, deskEnd1.matrix);

  var deskEnd2 = new THREE.Mesh(deskEndGeometry);
  deskEnd2.position.y = 42;
  deskEnd2.position.x = 155;
  deskEnd2.position.z = -30;
  deskEnd2.rotation.y = -Math.PI/4;
  deskEnd2.updateMatrix();
  deskGeometry.merge(deskEnd2.geometry, deskEnd2.matrix);

  var otheDreskEnd1 = new THREE.Mesh(deskEndGeometry);
  otheDreskEnd1.position.y = 42;
  otheDreskEnd1.position.x = -155;
  otheDreskEnd1.position.z = -30;
  //deskEnd.rotation.y = Math.PI/2;
  otheDreskEnd1.rotation.y = Math.PI/4;
  otheDreskEnd1.updateMatrix();
  deskGeometry.merge(otheDreskEnd1.geometry, otheDreskEnd1.matrix);

  var otheDreskEnd2 = new THREE.Mesh(deskEndGeometry);
  otheDreskEnd2.position.y = 42;
  otheDreskEnd2.position.x = -155;
  otheDreskEnd2.position.z = 30;
  //deskEnd.rotation.y = Math.PI/2;
  otheDreskEnd2.rotation.y = -Math.PI/4;
  otheDreskEnd2.updateMatrix();
  deskGeometry.merge(otheDreskEnd2.geometry, otheDreskEnd2.matrix);

  /*var rightDeskEnd = new THREE.Group();
  rightDeskEnd.add(deskEnd1);
  rightDeskEnd.add(deskEnd2);*/
  //deskEnd2.updateMatrix();
  //singleGeometry.merge(deskEnd2.geometry, endDivider1.matrix);


  /*var leftDeskEnd = new THREE.Group();
  leftDeskEnd = rightDeskEnd.clone();
  leftDeskEnd.rotation.y = Math.PI;*/

  var geometryCylinder = new THREE.CylinderGeometry(32,32,2,32);
  var endCircle1 = new THREE.Mesh(geometryCylinder);
  endCircle1.position.y = 42;
  endCircle1.position.x = 175;
  endCircle1.position.z = 50;

  var endCircle2 = new THREE.Mesh(geometryCylinder);
  endCircle2.position.y = 42;
  endCircle2.position.x = 175;
  endCircle2.position.z = -50;

  endCircle1.updateMatrix();
  deskGeometry.merge(endCircle1.geometry, endCircle1.matrix);

  endCircle2.updateMatrix();
  deskGeometry.merge(endCircle2.geometry, endCircle2.matrix);


  var otherEndCircle1 = new THREE.Mesh(geometryCylinder);
  otherEndCircle1.position.y = 42;
  otherEndCircle1.position.x = -175;
  otherEndCircle1.position.z = 50;
  otherEndCircle1.updateMatrix();
  deskGeometry.merge(otherEndCircle1.geometry, otherEndCircle1.matrix);

  var otherEndCircle2 = new THREE.Mesh(geometryCylinder);
  otherEndCircle2.position.y = 42;
  otherEndCircle2.position.x = -175;
  otherEndCircle2.position.z = -50;
  otherEndCircle2.updateMatrix();
  deskGeometry.merge(otherEndCircle2.geometry, otherEndCircle2.matrix);


  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(370,2,90);
  var square = new THREE.Mesh(geometrySquare, gateMaterial);
  square.position.y = 42;
  square.updateMatrix();
  deskGeometry.merge(square.geometry, square.matrix);

  var rightCabinet = new FilingCabinet(renderer,scene,deskGeometry,microcache);
  var leftCabinet = new FilingCabinet(renderer,scene,deskGeometry,microcache);
  //rightCabinet.rotation.y = Math.PI/2;
  rightCabinet.position.z = 22.5;
  rightCabinet.position.x = 15;
  rightCabinet.updateMatrix();
  //deskGeometry.mergeMesh(rightCabinet);
  leftCabinet.position.z = 22.5;
  leftCabinet.position.x = -15;

  var cabinetGroup = new THREE.Group();
  cabinetGroup.add(rightCabinet);
  cabinetGroup.add(leftCabinet);

  var otherCabinetGroup = new THREE.Group();
  otherCabinetGroup = cabinetGroup.clone();
  otherCabinetGroup.rotation.y = Math.PI;


  middleDivider.updateMatrix();
  singleGeometry.merge(middleDivider.geometry, middleDivider.matrix)
  //group.add(middleDivider);
  //rightDividerGroup.updateMatrix();
  //singleGeometry.merge(rightDividerGroup.geometry, rightDividerGroup.matrix);
  //group.add(rightDividerGroup);
  //leftDividerGroup.updateMatrix();
  //singleGeometry.merge(leftDividerGroup.geometry, leftDividerGroup.matrix);
  singleGeometry.mergeVertices();
  deskGeometry.mergeVertices();
  var divider = new THREE.Mesh(singleGeometry,dividerMaterial);
  group.add(divider);
  //group.add(leftDividerGroup);
  var desk = new THREE.Mesh(deskGeometry,gateMaterial);
  group.add(desk);

  //group.add(middleLeg);
  //group.add(rightLegGroup);
  //group.add(leftLegGroup);
  //group.add(square);
  group.add(cabinetGroup);
  group.add(otherCabinetGroup);
  return group;
}
