SupportDesk = function(renderer,scene,microcache){
  var group = new THREE.Group();
  var deskGeometry = new THREE.Geometry();
  var texture = microcache.getSet('deskCacheTexture', new THREE.TextureLoader().load('image/deskTexture.png'));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 5, 4 );
  var deskMaterial = new THREE.MeshBasicMaterial({map: texture});
  var topGeometry = new THREE.BoxGeometry(600,84,0.5);
  var mainTop = new THREE.Mesh(topGeometry,deskMaterial);
  mainTop.rotation.x = Math.PI/2;
  mainTop.rotation.z = Math.PI/2;
  mainTop.position.y = -37;
  mainTop.position.x = 700;
  mainTop.position.z = 200;

  var bradDeskGeometry = new THREE.BoxGeometry(200,84,0.5);
  var bradDesk = new THREE.Mesh(bradDeskGeometry,deskMaterial);
  bradDesk.rotation.x = Math.PI/2;
  bradDesk.rotation.x = Math.PI/2;
  bradDesk.position.y = -37;
  bradDesk.position.x = 642;
  bradDesk.position.z = -142;

  var bradDeskLeg = new THREE.Mesh(bradDeskGeometry,deskMaterial);
  bradDeskLeg.position.y = -79;
  bradDeskLeg.position.x = 642;
  bradDeskLeg.position.z = -183;

  var deskEndGeometry = new THREE.BoxGeometry(84,85,0.5);
  var deskEndGeometry1 = new THREE.Mesh(deskEndGeometry,deskMaterial);
  deskEndGeometry1.rotation.y = Math.PI/2;
  deskEndGeometry1.position.y = -80;
  deskEndGeometry1.position.x = 543;
  deskEndGeometry1.position.z = -142;

  var deskEnd = deskEndGeometry1.clone();
  deskEnd.position.z = 458;

  var deskMiddle = deskEndGeometry1.clone();
  deskMiddle.position.z = 158;

  var delDeskGeometry = new THREE.BoxGeometry(116,84,0.5);
  var delDesk = new THREE.Mesh(delDeskGeometry,deskMaterial);
  delDesk.rotation.x = Math.PI/2;
  delDesk.position.y = -37;
  delDesk.position.x = 600;
  delDesk.position.z = 458;
  var delDeskLeg = new THREE.Mesh(bradDeskGeometry,deskMaterial);
  delDeskLeg.position.y = -79;
  delDeskLeg.position.x = 642;
  delDeskLeg.position.z = 496;

  //var dellDeskGeometry = new THREE.BoxGeometry(116,84,0.5);
  var jasonDesk = new THREE.Mesh(delDeskGeometry,deskMaterial);
  jasonDesk.rotation.x = Math.PI/2;
  jasonDesk.position.y = -37;
  jasonDesk.position.x = 600;
  jasonDesk.position.z = 158;

  var cabinet = new SupportCabinet(renderer,scene,microcache);
  cabinet.rotation.y = -Math.PI/2;
  cabinet.position.x = 725;
  cabinet.position.y = 50;
  cabinet.position.z = 160;

  var deskBackLegGeometry = new THREE.BoxGeometry(680,84,0.5);
  var deskBackLegDesk = new THREE.Mesh(deskBackLegGeometry,deskMaterial);
  deskBackLegDesk.position.y = -80;
  deskBackLegDesk.rotation.y = Math.PI/2;
  deskBackLegDesk.position.z = 156;
  deskBackLegDesk.position.x = 738;

  group.add(deskEnd);
  group.add(deskMiddle);
  group.add(deskEndGeometry1);
  group.add(delDeskLeg);
  group.add(bradDeskLeg);
  group.add(deskBackLegDesk);
  group.add(cabinet);
  group.add(jasonDesk);
  group.add(delDesk);
  group.add(bradDesk);
  group.add(mainTop);
  return group
}
