HammyTheHamster =  = function(renderer,scene,microcache){
  var group = new THREE.Group();


  var geometry = new THREE.CylinderGeometry(50, 50, 50, 50, 50, true);
  var material = new THREE.MeshBasicMaterial({color: 0xffff00, side:THREE.DoubleSide});
  var cylinder = new THREE.Mesh( geometry, material );
  cylinder.rotation.x = Math.PI/2;
  cylinder.position.y = -40;




  group.add(cylinder);
  return group;
}
