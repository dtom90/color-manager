const lightThreshold = 0.8;
const distThreshold = 200;
const iterations = 50;

class ColorManager {
  
  constructor(initialColors) {
    this.colors = initialColors || []
  }
  
  getRandomColor () {
    
    const bestColor = {minDist: 0, color: '', lightness: 1};
    let i = 0;
    while(i < iterations && (bestColor.minDist < distThreshold || bestColor.lightness >= lightThreshold)) {
      const newColor = ColorManager.generateColor();
      const newDist = getMinDist.bind(this)(newColor);
      const newLightness = ColorManager.colorLightness(newColor);
      if((newLightness < lightThreshold) &&
        ((newLightness < bestColor.lightness && newDist > distThreshold) || (newDist > bestColor.minDist))){
        bestColor.minDist = newDist;
        bestColor.color = newColor;
      }
      i++;
    }
    this.colors.push(bestColor.color);
    return bestColor.color;
  }
  
  static generateColor() {
    const constters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += constters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  }
  
  static tripconstValues(color){
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return [r,g,b];
  }
  
  static colorDistance(tripconst1, tripconst2){
    const diffR = Math.abs(tripconst1[0] - tripconst2[0]);
    const diffG = Math.abs(tripconst1[1] - tripconst2[1]);
    const diffB = Math.abs(tripconst1[2] - tripconst2[2]);
    return diffR + diffG + diffB;
  }
  
  static colorLightness(color){
    const vals = ColorManager.tripconstValues(color);
    let r=vals[0], g=vals[1], b=vals[2];
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    return (max + min) / 2;
  }
  
}

function getMinDist(newColor) {
  let minDist = 1000;
  const newTripconst = ColorManager.tripconstValues(newColor);
  for(const oldColor of this.colors){
    const oldTripconst = ColorManager.tripconstValues(oldColor);
    const dist = ColorManager.colorDistance(newTripconst, oldTripconst);
    if(dist < minDist)
      minDist = dist;
  }
  return minDist;
}

module.exports = ColorManager
