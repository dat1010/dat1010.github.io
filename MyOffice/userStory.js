
function isInBubble(myPositionX,myPositionZ,x,z){
  var distance;
  distance = Math.sqrt(Math.pow((myPositionX-x), 2) + Math.pow(myPositionZ-z,2));
  if (distance == 30 || distance < 30){
    return true;
  }
  return false;
}

function personSays(myPositionX,myPositionZ){
    if isInBubble(myPositionX,myPositionZ,-399,48){
      return "David says: Im making a game."
    }
    return "";
}
