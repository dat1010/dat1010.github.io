ComputerStand =  function(renderer,scene){
  var group = new THREE.Group();
  var texture = THREE.TextureLoader()('image/deskTexture.png', {}, function() {
    //renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 5, 5 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});


  var curve = new THREE.EllipseCurve(
      10, 10,             // ax, aY
      7, 3,            // xRadius, yRadius
      0, 1 * Math.PI, // aStartAngle, aEndAngle
      false             // aClockwise
  );

  var points = curve.getSpacedPoints( 20 );

  var path = new THREE.Path();
  var geometry = path.createGeometry( points );

  var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

  var line = new THREE.Line( geometry, material );

  group.add( line );

  return group;
}
