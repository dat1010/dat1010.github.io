AddMonitors = function(renderer,scene,microcache){
  //var monitorSystemGeometry = new THREE.Geometry();
  //monitorSystemGeometry.vertices.push(new THREE.Vector3(-358,17,-13));
  var myMainMonitor = new Monitor(renderer,scene,'image/MyComputer.png',45,30,microcache);
  scene.add(myMainMonitor);
  myMainMonitor.position.x = -358;
  myMainMonitor.position.z = 17;
  myMainMonitor.position.y = -13;
  myMainMonitor.rotation.y = -Math.PI/4;

  var mySecondMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30,microcache);
  scene.add(mySecondMonitor);
  mySecondMonitor.position.x = -394;
  mySecondMonitor.position.z = -11;
  mySecondMonitor.position.y = -13;
  mySecondMonitor.rotation.y = -Math.PI/6;

  var myLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  scene.add(myLaptop);
  myLaptop.position.x = -337;
  myLaptop.position.z = 50;
  myLaptop.position.y = -20;
  myLaptop.rotation.y = -Math.PI/3;

  var myKeyBoard = new KeyBoard(renderer,scene);
  scene.add(myKeyBoard);
  myKeyBoard.position.x = -375;
  myKeyBoard.position.z = 30;
  myKeyBoard.position.y = -35;
  myKeyBoard.rotation.y = -Math.PI/5;


  var anthoniesMonitor = new Monitor(renderer,scene,'image/overwatch2.png',45,30,microcache);
  //scene.add(anthoniesMonitor);
  var anthonyConitorGroup = new THREE.Group();
  anthoniesMonitor.position.x = -22.5;
  anthoniesMonitor.position.z = 5;
  anthoniesMonitor.rotation.y = Math.PI/4;
  anthonyConitorGroup.add(anthoniesMonitor);
  var anthonies2ndMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  anthonies2ndMonitor.position.x = 18;
  anthonies2ndMonitor.position.z = -5;
  anthonyConitorGroup.add(anthonies2ndMonitor)
  var anthoniesLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  anthonyConitorGroup.add(anthoniesLaptop);
  anthoniesLaptop.position.x = 55;
  anthoniesLaptop.position.y = -6;
  anthoniesLaptop.position.z = -3;
  var anthonyKeyboard = new KeyBoard(renderer,scene);
  anthonyKeyboard.position.y = -23;
  anthonyKeyboard.position.z = 13;
  anthonyKeyboard.position.x = 8;
  anthonyConitorGroup.add(anthonyKeyboard);

  scene.add(anthonyConitorGroup);
  anthonyConitorGroup.position.x = -555;
  anthonyConitorGroup.position.z = -95;
  anthonyConitorGroup.position.y = -13;
  anthonyConitorGroup.rotation.y = -Math.PI/6;


  var jHallMonitor = new Monitor(renderer,scene,'image/theLongMonitor.png',30,50,microcache);
  //scene.add(anthoniesMonitor);
  var jHallMonitorGroup = new THREE.Group();
  jHallMonitor.position.x = -40;
  //jHallMonitor.position.z = 5;
  //jHallMonitor.rotation.y = Math.PI/4;
  jHallMonitor.rotation.x = -Math.PI/10;
  jHallMonitorGroup.add(jHallMonitor);
  var jHall2ndMonitor = new Monitor(renderer,scene,'image/lolVictory.png',45,30,microcache);
  //jHall2ndMonitor.position.x = 18;
  //jHall2ndMonitor.position.z = -5;
  jHallMonitorGroup.add(jHall2ndMonitor)
  scene.add(jHallMonitorGroup);
  jHall2ndMonitor.rotation.y = -Math.PI/6;
  jHall2ndMonitor.position.z = 15;

  var jHallKeyboard = new KeyBoard(renderer,scene);
  jHallKeyboard.position.y = -23;
  jHallKeyboard.position.z = 20;
  jHallKeyboard.position.x = -25;
  jHallMonitorGroup.add(jHallKeyboard);

  var jHall3rdMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  jHallMonitorGroup.position.x = -570;
  jHallMonitorGroup.position.z = -149;
  jHallMonitorGroup.position.y = -13;
  jHallMonitorGroup.rotation.y = (3*Math.PI)/4;


  var brandonMonitor = new Monitor(renderer,scene,'image/makinBacon.png',45,30,microcache);
  var brandonMonitorGroup = new THREE.Group();
  brandonMonitorGroup.add(brandonMonitor);

  var brandon2ndMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  brandon2ndMonitor.position.x = -45
  brandon2ndMonitor.rotation.y = Math.PI/7;
  brandon2ndMonitor.position.z = 10;
  brandonMonitorGroup.add(brandon2ndMonitor);
  brandonMonitorGroup.rotation.y =  (3*Math.PI)/3.5;
  brandonMonitorGroup.position.x = -365;
  brandonMonitorGroup.position.y = -13;
  brandonMonitorGroup.position.z = -12;
  var brandonLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  brandonLaptop.position.y = -13;
  brandonLaptop.position.x = 38;
  brandonLaptop.position.z = 2;
  brandonMonitorGroup.add(brandonLaptop);
  var brandonKeyboard = new KeyBoard(renderer,scene);
  brandonKeyboard.position.y = -23;
  brandonKeyboard.position.z = 17;
  brandonMonitorGroup.add(brandonKeyboard);

  scene.add(brandonMonitorGroup);


  var tomMonitor = new Monitor(renderer,scene,'image/vb6.png',45,30,microcache);
  //scene.add(anthoniesMonitor);
  var tomMonitorGroup = new THREE.Group();
  tomMonitor.position.x = -40;
  //jHallMonitor.position.z = 5;
  //jHallMonitor.rotation.y = Math.PI/4;
  //tomMonitor.rotation.x = -Math.PI/10;
  tomMonitorGroup.add(tomMonitor);
  var tom2ndMonitor = new Monitor(renderer,scene,'image/scubaDubaDuba.png',45,30,microcache);
  //jHall2ndMonitor.position.x = 18;
  //jHall2ndMonitor.position.z = -5;
  tomMonitorGroup.add(tom2ndMonitor)
  scene.add(tomMonitorGroup);
  tom2ndMonitor.rotation.y = -Math.PI/6;
  tom2ndMonitor.position.z = 10;
  tom2ndMonitor.position.x = 5;
  //var jHall3rdMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30);
  var tom1stLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  tom1stLaptop.position.y = -13;
  tom1stLaptop.position.x = -75;
  tom1stLaptop.rotation.y = Math.PI/20;
  tomMonitorGroup.add(tom1stLaptop);
  var tom1stKeyboard = new KeyBoard(renderer,scene,'image/mechanicalKeyBoard.png');
  tom1stKeyboard.position.y = -23;
  tom1stKeyboard.position.x = -70;
  tom1stKeyboard.position.z = 23;
  tom1stKeyboard.rotation.y = Math.PI/20;
  tomMonitorGroup.add(tom1stKeyboard);
  //'image/keyboard.png'
  var tom2ndLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  tom2ndLaptop.position.y = -13;
  tom2ndLaptop.position.x = -105;
  tom2ndLaptop.rotation.y = Math.PI/20;
  tomMonitorGroup.add(tom2ndLaptop);
  var tom2ndKeyboard = new KeyBoard(renderer,scene,'image/mechanicalKeyBoard.png');
  tom2ndKeyboard.position.y = -23;
  tom2ndKeyboard.position.x = -101;
  tom2ndKeyboard.position.z = 23;
  tom2ndKeyboard.rotation.y = Math.PI/20;
  tomMonitorGroup.add(tom2ndKeyboard);
  scene.add(tomMonitorGroup);
  tomMonitorGroup.rotation.y = -Math.PI/1.9;
  tomMonitorGroup.position.y = -13;
  tomMonitorGroup.position.x = 87;
  tomMonitorGroup.position.z = 120;


  var vMonitor = new Monitor(renderer,scene,'image/theLongMonitor.png',45,30,microcache);
  //scene.add(anthoniesMonitor);
  var vMonitorGroup = new THREE.Group();
  vMonitor.position.x = -45;
  vMonitor.position.z = 10;
  vMonitor.rotation.y = Math.PI/6;
  //vMonitor.rotation.x = -Math.PI/10;
  vMonitorGroup.add(vMonitor);
  var v2ndMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  //v2ndMonitor.position.x = ;
  //v2ndMonitor.position.z = -5;
  var vKeyboard = new KeyBoard(renderer,scene);
  vKeyboard.position.y = -23;
  vKeyboard.position.z = 15;
  vMonitorGroup.add(vKeyboard);
  vMonitorGroup.add(v2ndMonitor)
  scene.add(vMonitorGroup);
  vMonitorGroup.position.y = -13;
  vMonitorGroup.rotation.y = -Math.PI/2;
  vMonitorGroup.position.x = 87;
  vMonitorGroup.position.z = -100;
  var vMac = new MackBookPro(renderer,scene,'image/macScreen.png',28,17,false,microcache);
  vMac.position.y = -13;
  vMac.position.x = 39;
  vMonitorGroup.add(vMac);


  var michaelMonitor = new Monitor(renderer,scene,'image/geologist.png',45,30,microcache);
  michaelMonitor.rotation.y = Math.PI/3;
  var michaelGroup = new THREE.Group();
  var michael2ndMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  michael2ndMonitor.position.x = 35;
  michael2ndMonitor.position.z = -20;
  michael2ndMonitor.rotation.y = -Math.PI/7;

  var michaelComputer = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  michaelComputer.position.y = -13;
  michaelComputer.position.z = -3;
  michaelComputer.position.x = 66;
  michaelComputer.rotation.y = -9*Math.PI/4.1
  michaelGroup.add(michaelComputer)

  michaelGroup.add(michael2ndMonitor);
  michaelGroup.add(michaelMonitor);
  michaelGroup.rotation.y = 5*Math.PI/4;
  michaelGroup.position.y = -13;
  michaelGroup.position.x = -580;
  michaelGroup.position.z = -150;
  scene.add(michaelGroup);



  var joshMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  joshMonitor.rotation.y = Math.PI/3;
  var joshGroup = new THREE.Group();
  var josh2ndMonitor = new Monitor(renderer,scene,'image/jogging.png',45,30,microcache);
  josh2ndMonitor.position.x = 35;
  josh2ndMonitor.position.z = -20;
  josh2ndMonitor.rotation.y = -Math.PI/7;

  var joshComputer = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  joshComputer.position.y = -13;
  joshComputer.position.z = -3;
  joshComputer.position.x = 66;
  joshComputer.rotation.y = -9*Math.PI/4.1
  joshGroup.add(joshComputer)

  joshGroup.add(josh2ndMonitor);
  joshGroup.add(joshMonitor);
  joshGroup.position.y = -13;
  joshGroup.position.x = -320;
  joshGroup.position.z = 60;
  joshGroup.rotation.y = Math.PI/3.5;

  scene.add(joshGroup);


  var playerMonitor = new Monitor(renderer,scene,'image/offMonitorScreen.png',45,30,microcache);
  playerMonitor.rotation.y = Math.PI/3;
  var playerGroup = new THREE.Group();
  var player2ndMonitor = new Monitor(renderer,scene,'image/offMonitorScreen.png',45,30,microcache);
  player2ndMonitor.position.x = 35;
  player2ndMonitor.position.z = -20;
  player2ndMonitor.rotation.y = -Math.PI/7;
  playerGroup.add(playerMonitor);
  playerGroup.position.y = -13;
  playerGroup.position.z = 150;
  playerGroup.position.x = 80;
  playerGroup.rotation.y = 11*Math.PI/6;
  scene.add(playerGroup);

  var blakeMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  blakeMonitor.rotation.y = -Math.PI/2
  blakeMonitor.position.y = -10;
  blakeMonitor.position.x = 735;
  blakeMonitor.position.z = -590;
  scene.add(blakeMonitor);
  var blake2ndMonitor = new Monitor(renderer,scene,'image/archer2.png',45,30,microcache);
  blake2ndMonitor.rotation.y = -Math.PI/4
  blake2ndMonitor.position.y = -10;
  blake2ndMonitor.position.x = 715;
  blake2ndMonitor.position.z = -635;
  scene.add(blake2ndMonitor);


  var mac = new MackBookPro(renderer,scene,'image/macScreen.png',28,17,false,microcache);
  mac.rotation.y = Math.PI;
  mac.position.y = -25;
  mac.position.x = 660;
  mac.position.z = -490;
  scene.add(mac);


  var dlisaMonitor = new Monitor(renderer,scene,'image/vegies.png',45,30,microcache);
  //dlisaMonitor.position.y = -13;
  dlisaMonitor.rotation.y = -Math.PI/4.5;
  dlisaMonitor.position.x = 30;
  dlisaMonitor.position.z = 20;
  var dlisaMonitorGroup = new THREE.Group();
  dlisaMonitorGroup.add(dlisaMonitor);

  var dlisa2ndMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  dlisa2ndMonitor.position.x = -45
  //dlisa2ndMonitor.rotation.y = Math.PI/7;
  dlisa2ndMonitor.position.z = 7;
  dlisaMonitorGroup.add(dlisa2ndMonitor);
  var dlisaLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  dlisaLaptop.position.y = -13;
  dlisaLaptop.position.x = -5;
  dlisaLaptop.position.z = 5;
  dlisaMonitorGroup.add(dlisaLaptop);
  var dlisaKeyboard = new KeyBoard(renderer,scene);

  dlisaKeyboard.position.y = -35;
  dlisaKeyboard.position.z = -120;
  dlisaKeyboard.position.x = 130;
  dlisaKeyboard.rotation.y = Math.PI/2;
  dlisaMonitorGroup.add(dlisaKeyboard);
  dlisaMonitorGroup.position.x = 100;
  dlisaMonitorGroup.position.y = -13;
  dlisaMonitorGroup.position.z = -120;
  dlisaMonitorGroup.rotation.y = Math.PI/2;
  scene.add(dlisaKeyboard);
  scene.add(dlisaMonitorGroup);


  var mikeMonitor = new Monitor(renderer,scene,'image/rogueOne.png',45,30,microcache);
  var mikeMonitorGroup = new THREE.Group();
  mikeMonitorGroup.add(mikeMonitor);

  var mike2ndMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  mike2ndMonitor.position.x = -45
  mike2ndMonitor.rotation.y = Math.PI/7;
  mike2ndMonitor.position.z = 10;
  mikeMonitorGroup.add(mike2ndMonitor);
  mikeMonitorGroup.rotation.y =  (3*Math.PI)/3.5;

  var mikeLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  mikeLaptop.position.y = -13;
  mikeLaptop.position.x = 38;
  mikeLaptop.position.z = 2;
  mikeMonitorGroup.add(mikeLaptop);
  var mikeKeyboard = new KeyBoard(renderer,scene);
  mikeKeyboard.position.y = -35;
  mikeKeyboard.position.z = 75;
  mikeKeyboard.position.x = 125;
  mikeKeyboard.rotation.y = Math.PI/2;
  mikeMonitorGroup.add(mikeKeyboard);
  mikeMonitorGroup.rotation.y = Math.PI/2;
  mikeMonitorGroup.position.x = 110;
  mikeMonitorGroup.position.y = -13;
  mikeMonitorGroup.position.z = 70;

  scene.add(mikeKeyboard);
  scene.add(mikeMonitorGroup);


  var hungerGamesMonitor = new Monitor(renderer,scene,'image/hungerGames2.png',45,30,microcache);
  hungerGamesMonitor.rotation.y = -Math.PI/3;
  hungerGamesMonitor.position.y = 97;
  hungerGamesMonitor.position.x = 710;
  hungerGamesMonitor.position.z = -170;
  scene.add(hungerGamesMonitor);


  var aaronMonitorGroup = new THREE.Group();
  var aaronMonitor = new Monitor(renderer,scene,'image/raceCar.png',45,30,microcache);
  aaronMonitor.position.x = 35;
  aaronMonitor.position.z = -6
  aaronMonitor.rotation.y = -Math.PI/4;

  aaronMonitorGroup.add(aaronMonitor);
  var aaronLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  aaronLaptop.position.y = -13;
  aaronLaptop.rotation.y = Math.PI/6;
  aaronLaptop.position.x = 7
  aaronLaptop.position.z = -5;
  aaronMonitorGroup.add(aaronLaptop);
  aaronMonitorGroup.rotation.y = Math.PI;
  aaronMonitorGroup.position.x = 120;
  aaronMonitorGroup.position.y = -13;
  aaronMonitorGroup.position.z = -168;
  scene.add(aaronMonitorGroup);


  var bradMonitor = new Monitor(renderer,scene,'image/desktop.png',45,30,microcache);
  //scene.add(anthoniesMonitor);
  var bradMonitorGroup = new THREE.Group();
  bradMonitor.position.x = -22.5;
  bradMonitor.position.z = 5;
  bradMonitor.rotation.y = Math.PI/4;
  bradMonitorGroup.add(bradMonitor);
  var brad2ndMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  brad2ndMonitor.position.x = 18;
  brad2ndMonitor.position.z = -5;
  bradMonitorGroup.add(brad2ndMonitor)

  var bradUpdatingMonitor = new Monitor(renderer,scene,'image/updating2.png',45,30,microcache);
  bradUpdatingMonitor.position.x = -68;
  bradUpdatingMonitor.position.z = 10;
  bradUpdatingMonitor.rotation.y = Math.PI/8;
  bradMonitorGroup.add(bradUpdatingMonitor);
  //var bradLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  //bradMonitorGroup.add(bradLaptop);
  //bradLaptop.position.x = 55;
  //bradLaptop.position.y = -13;
  //bradLaptop.position.z = -3;
  var bradKeyboard = new KeyBoard(renderer,scene);
  bradKeyboard.position.y = -23;
  bradKeyboard.position.z = 13;
  bradKeyboard.position.x = 8;
  bradMonitorGroup.add(bradKeyboard);
  bradMonitorGroup.rotation.y = -Math.PI/6;
  bradMonitorGroup.position.x = 647;
  bradMonitorGroup.position.z = -130;
  bradMonitorGroup.position.y = -13;

  scene.add(bradMonitorGroup);

  var mariMonitor = new Monitor(renderer,scene,'image/desktop.png',45,30,microcache);
  //scene.add(anthoniesMonitor);
  var mariMonitorGroup = new THREE.Group();
  mariMonitor.position.x = -22.5;
  mariMonitor.position.z = 5;
  mariMonitor.rotation.y = Math.PI/4;
  mariMonitorGroup.add(mariMonitor);
  var mari2ndMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  mari2ndMonitor.position.x = 18;
  mari2ndMonitor.position.z = -5;
  mariMonitorGroup.add(mari2ndMonitor)
  var mariLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  mariMonitorGroup.add(mariLaptop);
  mariLaptop.position.x = 55;
  mariLaptop.position.y = -13;
  mariLaptop.position.z = -3;
  var mariKeyboard = new KeyBoard(renderer,scene);
  mariKeyboard.position.y = -23;
  mariKeyboard.position.z = 13;
  mariKeyboard.position.x = 8;
  mariMonitorGroup.add(mariKeyboard);
  mariMonitorGroup.rotation.y = -Math.PI;
  mariMonitorGroup.position.x = 659;
  mariMonitorGroup.position.z = 135;
  mariMonitorGroup.position.y = -13;

  scene.add(mariMonitorGroup);

  var jasonMonitor = new Monitor(renderer,scene,'image/desktop.png',45,30,microcache);
  //scene.add(anthoniesMonitor);
  var jasonMonitorGroup = new THREE.Group();
  jasonMonitor.position.x = -22.5;
  jasonMonitor.position.z = 5;
  jasonMonitor.rotation.y = Math.PI/4;
  jasonMonitorGroup.add(jasonMonitor);
  var jason2ndMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  jason2ndMonitor.position.x = 18;
  jason2ndMonitor.position.z = -5;
  jasonMonitorGroup.add(jason2ndMonitor)
  var jasonLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  jasonMonitorGroup.add(jasonLaptop);
  jasonLaptop.rotation.y = Math.PI/6;
  jasonLaptop.position.x = -65;
  jasonLaptop.position.y = -13;
  jasonLaptop.position.z = 30;
  var jasonKeyboard = new KeyBoard(renderer,scene);
  jasonKeyboard.position.y = -23;
  jasonKeyboard.position.z = 13;
  jasonKeyboard.position.x = 8;
  jasonMonitorGroup.add(jasonKeyboard);
  jasonMonitorGroup.rotation.y = -Math.PI/6;
  jasonMonitorGroup.position.x = 659;
  jasonMonitorGroup.position.z = 180;
  jasonMonitorGroup.position.y = -13;
  scene.add(jasonMonitorGroup);

  var delMonitor = new Monitor(renderer,scene,'image/desktop.png',45,30,microcache);
  //scene.add(anthoniesMonitor);
  var delMonitorGroup = new THREE.Group();
  delMonitor.position.x = -22.5;
  delMonitor.position.z = 5;
  delMonitor.rotation.y = Math.PI/4;
  delMonitorGroup.add(delMonitor);
  var del2ndMonitor = new Monitor(renderer,scene,'image/boringVS.png',45,30,microcache);
  del2ndMonitor.position.x = 18;
  del2ndMonitor.position.z = -5;
  delMonitorGroup.add(del2ndMonitor)
  var delLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17,false,microcache);
  delMonitorGroup.add(delLaptop);
  delLaptop.position.x = 55;
  delLaptop.position.y = -13;
  delLaptop.position.z = -3;
  var delKeyboard = new KeyBoard(renderer,scene);
  delKeyboard.position.y = -23;
  delKeyboard.position.z = 13;
  delKeyboard.position.x = 8;
  delMonitorGroup.add(delKeyboard);
  delMonitorGroup.rotation.y = 7*Math.PI/6;
  delMonitorGroup.position.x = 680;
  delMonitorGroup.position.z = 435;
  delMonitorGroup.position.y = -13;

  scene.add(delMonitorGroup);



}
