if ( ! Detector.webgl ) {

    Detector.addGetWebGLMessage();
    document.getElementById( 'container' ).innerHTML = "";

}
init();
function init() {
  var camera, scene, renderer;
  			var geometry, material, mesh;
  			var controls;
  			var objects = [];
  			var raycaster;
  			var blocker = document.getElementById( 'blocker' );
  			var instructions = document.getElementById( 'instructions' );
  			// http://www.html5rocks.com/en/tutorials/pointerlock/intro/
  			var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
  			if ( havePointerLock ) {
  				var element = document.body;
  				var pointerlockchange = function ( event ) {
  					if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
  						controlsEnabled = true;
  						controls.enabled = true;
  						blocker.style.display = 'none';
  					} else {
  						controls.enabled = false;
  						blocker.style.display = '-webkit-box';
  						blocker.style.display = '-moz-box';
  						blocker.style.display = 'box';
  						instructions.style.display = '';
  					}
  				};
  				var pointerlockerror = function ( event ) {
  					instructions.style.display = '';
  				};
  				// Hook pointer lock state change events
  				document.addEventListener( 'pointerlockchange', pointerlockchange, false );
  				document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
  				document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );
  				document.addEventListener( 'pointerlockerror', pointerlockerror, false );
  				document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
  				document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );
  				instructions.addEventListener( 'click', function ( event ) {
  					instructions.style.display = 'none';
  					// Ask the browser to lock the pointer
  					element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
  					element.requestPointerLock();
  				}, false );
  			} else {
  				instructions.innerHTML = 'You should be ashamed of yourself!';
  			}
  			init();
  			animate();
  			var controlsEnabled = false;
  			var moveForward = false;
  			var moveBackward = false;
  			var moveLeft = false;
  			var moveRight = false;
  			var canJump = false;
  			var prevTime = performance.now();
  			var velocity = new THREE.Vector3();
  			function init() {
  				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

  				scene = new THREE.Scene();
  				//scene.fog = new THREE.Fog( 0xffffff, 0, 750 );

  				controls = new THREE.PointerLockControls( camera );
  				scene.add( controls.getObject() );
  				var onKeyDown = function ( event ) {
  					switch ( event.keyCode ) {
  						case 38: // up
  						case 87: // w
  							moveForward = true;
  							break;
  						case 37: // left
  						case 65: // a
  							moveLeft = true; break;
  						case 40: // down
  						case 83: // s
  							moveBackward = true;
  							break;
  						case 39: // right
  						case 68: // d
  							moveRight = true;
  							break;
  						case 32: // space
  							if ( canJump === true ) velocity.y += 350;
  							canJump = false;
  							break;
  					}
  				};
  				var onKeyUp = function ( event ) {
  					switch( event.keyCode ) {
  						case 38: // up
  						case 87: // w
  							moveForward = false;
  							break;
  						case 37: // left
  						case 65: // a
  							moveLeft = false;
  							break;
  						case 40: // down
  						case 83: // s
  							moveBackward = false;
  							break;
  						case 39: // right
  						case 68: // d
  							moveRight = false;
  							break;
  					}
  				};
  				document.addEventListener( 'keydown', onKeyDown, false );
  				document.addEventListener( 'keyup', onKeyUp, false );
  				raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );
  				// floor




               /*var light2 = new THREE.SpotLight(0xff99944);
               light2.position.set(-1, -1, -1);
               scene.add(light2);*/
           /*var sky = new THREE.Mesh(
                     new THREE.SphereGeometry(10000, 32, 320),
                     new THREE.MeshPhongMaterial({
                         map: THREE.ImageUtils.loadTexture('image/sky_offworld2.png')
                     })
                 );*/
           //sky.material.side = THREE.BackSide;

          //scene.add(sky);

           //This really isn't the world just the foundation or cement of the parking lot.
           //Maybe later I wont be lazy and changed the name.
           var world = new World(renderer,scene);
           scene.add(world);
           world.position.y = -130;
           var isFloor = new ISFloor(renderer,scene);
           scene.add(isFloor);
           isFloor.position.y = -129;

           var walls = new MainWalls(renderer,scene);
           scene.add(walls);
           objects.push(walls);
           walls.rotation.y = Math.PI/2
           walls.position.y = 18;

           var devDesk = new DogBoneDesk(renderer,scene,objects);
           scene.add(devDesk);
           objects.push(devDesk);
           //devDesk.position.y = 45;
           devDesk.position.z = -50;
           devDesk.position.x = -450;
           devDesk.position.y = -80;
           devDesk.rotation.y = 11*Math.PI/6;

           var qaDesk = new DogBoneDesk(renderer,scene,objects);
           scene.add(qaDesk);
           objects.push(qaDesk);
           //qaDesk.position.y = 45;
           qaDesk.position.x = 100;
           qaDesk.position.z = -15;
           qaDesk.position.y = -80;
           qaDesk.rotation.y = Math.PI/2;

           var zarbeckCabinet = new FilingCabinet(renderer,scene);
           scene.add(zarbeckCabinet);
           zarbeckCabinet.position.x = -600;
           zarbeckCabinet.position.z = -215;
           zarbeckCabinet.position.y = -80;
           zarbeckCabinet.rotation.y = -Math.PI/3;

           var monitors = new AddMonitors(renderer, scene);



  			/*	geometry = new THREE.BoxGeometry( 20, 20, 20 );
  				for ( var i = 0, l = geometry.faces.length; i < l; i ++ ) {
  					var face = geometry.faces[ i ];
  					face.vertexColors[ 0 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
  					face.vertexColors[ 1 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
  					face.vertexColors[ 2 ] = new THREE.Color().setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
  				}
  				for ( var i = 0; i < 500; i ++ ) {
  					material = new THREE.MeshPhongMaterial( { specular: 0xffffff, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } );
  					var mesh = new THREE.Mesh( geometry, material );
  					mesh.position.x = Math.floor( Math.random() * 20 - 10 ) * 20;
  					mesh.position.y = Math.floor( Math.random() * 20 ) * 20 + 10;
  					mesh.position.z = Math.floor( Math.random() * 20 - 10 ) * 20;
  					scene.add( mesh );
  					material.color.setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
  					objects.push( mesh );
  				}*/
  				//
  				renderer = new THREE.WebGLRenderer();
  				renderer.setClearColor( 0xffffff );
  				renderer.setPixelRatio( window.devicePixelRatio );
  				renderer.setSize( window.innerWidth, window.innerHeight );
  				document.body.appendChild( renderer.domElement );
  				//
  				window.addEventListener( 'resize', onWindowResize, false );
  			}
  			function onWindowResize() {
  				camera.aspect = window.innerWidth / window.innerHeight;
  				camera.updateProjectionMatrix();
  				renderer.setSize( window.innerWidth, window.innerHeight );
  			}
  			function animate() {
  				requestAnimationFrame( animate );
  				if ( controlsEnabled ) {
  					raycaster.ray.origin.copy( controls.getObject().position );
  					raycaster.ray.origin.y -= 10;
  					var intersections = raycaster.intersectObjects( objects );
  					var isOnObject = intersections.length > 0;
  					var time = performance.now();
  					var delta = ( time - prevTime ) / 1000;
  					velocity.x -= velocity.x * 10.0 * delta;
  					velocity.z -= velocity.z * 10.0 * delta;
  					velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
  					if ( moveForward ) velocity.z -= 600.0 * 2.5*delta;
  					if ( moveBackward ) velocity.z += 600.0 * 2.5*delta;
  					if ( moveLeft ) velocity.x -= 600.0 * 2.5*delta;
  					if ( moveRight ) velocity.x += 600.0 * 2.5*delta;
  					if ( isOnObject === true ) {
  						velocity.y = Math.max( 0, velocity.y );
  						canJump = true;
  					}
  					controls.getObject().translateX( velocity.x * delta );
  					controls.getObject().translateY( velocity.y * delta );
  					controls.getObject().translateZ( velocity.z * delta );
  					if ( controls.getObject().position.y < 10 ) {
  						velocity.y = 0;
  						controls.getObject().position.y = 10;
  						canJump = true;
  					}
  					prevTime = time;
  				}

  				renderer.render( scene, camera );
  			}

}
