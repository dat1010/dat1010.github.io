MainWalls = function(renderer,scene,microcache) {
  var group = new THREE.Group();

  var texture = microcache.getSet('wallTexture', new THREE.TextureLoader().load('image/wallTexture.png'));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 2, 2 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(1500,280,5);
  var northWall = new THREE.Mesh(geometrySquare, gateMaterial);
  northWall.rotation.y = Math.PI/2;
  northWall.position.x = 700;


  var otherTexture = microcache.getSet('greenWallTexture', new THREE.TextureLoader().load('image/lightTanTexture.png'));
  otherTexture.wrapS = THREE.RepeatWrapping;
  otherTexture.wrapT = THREE.RepeatWrapping;
  otherTexture.repeat.set(5, 5 );
  var otherMaterial = new THREE.MeshBasicMaterial({map: otherTexture});
  //TODO will need to add windows to this later.
  var southWall = new THREE.Mesh(geometrySquare, gateMaterial);
  southWall.rotation.y = Math.PI/2;
  southWall.position.x = -500;

  var southBoilergeometrySquare = new THREE.BoxGeometry(680,280,5);
  var southBoilerWall = new THREE.Mesh(southBoilergeometrySquare, otherMaterial);
  southBoilerWall.rotation.y = Math.PI/2;
  southBoilerWall.position.x = -250;
  southBoilerWall.position.z = -450;


  var westEastGeometry = new THREE.BoxGeometry(1200,280,5);
  var westWall = new THREE.Mesh(westEastGeometry, gateMaterial);
  westWall.position.z = 750;
  westWall.position.x = 100;

  var eastWall = new THREE.Mesh(westEastGeometry, otherMaterial);
  eastWall.position.z = -750;
  eastWall.position.x = 100;

  var southBoilergeometrySquare = new THREE.BoxGeometry(247,280,5);
  var eastBoilerWall = new THREE.Mesh(southBoilergeometrySquare, gateMaterial);
  eastBoilerWall.position.z = -113;
  eastBoilerWall.position.x = -376;

  var northOfficeWidth = new THREE.BoxGeometry(300,280,5);
  var northOfficeWidthWall = new THREE.Mesh(northOfficeWidth, gateMaterial);
  northOfficeWidthWall.position.z = -358;
  northOfficeWidthWall.position.x = 550;

  var northOfficeServerWall = new THREE.Mesh(northOfficeWidth, gateMaterial);
  northOfficeServerWall.position.z = -100;
  northOfficeServerWall.position.x = 550;

  var northOfficeServerWall1 = new THREE.Mesh(northOfficeWidth, gateMaterial);
  northOfficeServerWall1.position.z = 500;
  northOfficeServerWall1.position.x = 550;

  var northOfficelength = new THREE.BoxGeometry(1110,280,5);
  var northOfficelengthWall = new THREE.Mesh(northOfficelength, gateMaterial);
  northOfficelengthWall.rotation.y = Math.PI/2;
  northOfficelengthWall.position.z = 195;
  northOfficelengthWall.position.x = 400;


  var whiteBoardTexture = microcache.getSet('whiteBoardTexture', new THREE.TextureLoader().load('image/whiteBoard.png'));
  var whiteBoardMaterial = new THREE.MeshBasicMaterial({map: whiteBoardTexture});
  var whiteboardGeometry = new THREE.BoxGeometry(290,150,0.5);
  var whiteboard = new THREE.Mesh(whiteboardGeometry, whiteBoardMaterial);
  whiteboard.rotation.y = Math.PI/2;
  whiteboard.position.x = -247;
  whiteboard.position.z = -500;

  var whiteboardGeometry = new THREE.BoxGeometry(100,125,0.5);
  var mwhiteboard = new THREE.Mesh(whiteboardGeometry, whiteBoardMaterial);
  mwhiteboard.position.x = 150;
  mwhiteboard.position.z = -747.5;
  mwhiteboard.position.y = 20;

  var brandonWhiteboard = new THREE.Mesh(whiteboardGeometry, whiteBoardMaterial);
  brandonWhiteboard.rotation.y = Math.PI/2;
  brandonWhiteboard.position.z = -25;
  brandonWhiteboard.position.x = 397;

  var isDoor = new Door(renderer,scene,microcache);
  isDoor.position.x = 700;
  isDoor.position.z = -450;

  var oldOfficeDoor = new Door(renderer,scene,microcache);
  oldOfficeDoor.position.x = 400;
  oldOfficeDoor.position.z = -150;

  var blakeOfficeDoor = new Door(renderer,scene,microcache);
  blakeOfficeDoor.position.x = 400;
  blakeOfficeDoor.position.z = 570;

  var supportDoor = new Door(renderer,scene,microcache);
  supportDoor.rotation.y = Math.PI/2;
  supportDoor.position.z = 750;
  supportDoor.position.x = 300;

  var serverWindow = new ServerRoomWindow(renderer,scene,microcache);
  serverWindow.position.x = 400;
  serverWindow.position.z = 215;

  var serverRoomDoor = new Door(renderer,scene,microcache);
  serverRoomDoor.position.x = 400;
  serverRoomDoor.position.z = 440;

  var boilerRoomDoor = new Door(renderer,scene,microcache);
  boilerRoomDoor.rotation.y = Math.PI/2;
  boilerRoomDoor.position.z = -113;
  boilerRoomDoor.position.x = -320;

  group.add(brandonWhiteboard);
  group.add(boilerRoomDoor);
  group.add(serverRoomDoor);
  group.add(serverWindow);
  group.add(isDoor);
  group.add(oldOfficeDoor);
  group.add(blakeOfficeDoor);
  group.add(supportDoor);
  group.add(northWall);
  group.add(northOfficelengthWall);
  group.add(northOfficeServerWall1);
  group.add(whiteboard);
  group.add(northOfficeServerWall);
  group.add(southBoilerWall);
  group.add(northOfficeWidthWall);
  group.add(mwhiteboard);
  group.add(eastBoilerWall);
  group.add(southWall);
  group.add(westWall);
  group.add(eastWall);
  return group;
}
