var MAX_LEVEL = 6;
var VELOCITIES = [1,1.5,2,2.5,4]; 
var LEVELBOUND = [0,32,64,128,256,512,9999999];

function getVelocity(level){
  if (level < MAX_LEVEL) return VELOCITIES[level-1];
  return 0;
}
