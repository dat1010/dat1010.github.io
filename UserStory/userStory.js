Story = function(myPosition,x1,x2,z1,z2){

  function checkArea(myPosition,x1,x2,z1,z2){
    //are you ready for this?
    if ( myPosition.getObject().position.x > x1 &&
          myPosition.getObject().position.z > z1 &&
          myPosition.getObject().position.z < z2 &&
          myPosition.getObject().position.x < x2 ) {
      return true;
    }
    return false;
  }
 }
