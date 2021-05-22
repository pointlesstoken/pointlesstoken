function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}
function RGB2Color(r,g,b) {
  return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}
function makeColorGradient(frequency1, frequency2, frequency3,
                           phase1, phase2, phase3,
                           center, width, len) {
  if (center == undefined)   center = 128;
  if (width == undefined)    width = 127; 
  if (len == undefined)      len = 50;
  cycle = []
  for (var i = 0; i < len; ++i) {  
    var red = Math.sin(frequency1*i + phase1) * width + center;
    var green = Math.sin(frequency2*i + phase2) * width + center;
    var blue = Math.sin(frequency3*i + phase3) * width + center;
    cycle.push(RGB2Color(red,green,blue));
  }
  return cycle;
}
function rainbow(phase) {
  if (phase == undefined) phase = 0;
  center = 128;
  width = 127;
  frequency = Math.PI*2/50;
  cycle = []
  for (var i = 0; i < 50; ++i) {
    red   = Math.sin(frequency*i+2+phase) * width + center;
    green = Math.sin(frequency*i+0+phase) * width + center;
    blue  = Math.sin(frequency*i+4+phase) * width + center;
    cycle.push(RGB2Color(red,green,blue));
  }
  return cycle;
}
window.onload = function() {
  center = 128;
  width = 127;
  frequency = 2.4;
  //colors = makeColorGradient(frequency,frequency,frequency,0,2,4,center,width,50);
  colors = rainbow();
  index = 0;
  setInterval(function() {
    document.getElementById("triangle").style.color = colors[index];
    if (index < colors.length-1) {
      index++;
    } else {
      index = 0;
    }
  }, 100);
};
