/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const _getTime = (speed) => {
    let totalTime = 0;

    for (let i = 0; i < piles.length; i++) {
      totalTime += Math.ceil(piles[i] / speed);
    }

    return totalTime;
  };

  const _getSpeed = (minSpeed, maxSpeed) => {
    if (minSpeed >= maxSpeed - 1) {
      if(_getTime(minSpeed) <= h) return minSpeed;
      if(_getTime(maxSpeed) <= h) return maxSpeed;
     } 

    const midSpeed = Math.floor((minSpeed + maxSpeed) / 2);

    if (_getTime(midSpeed) <= h) {
      console.log(`minSpeed = ${minSpeed} --- maxSpeed = ${maxSpeed} ---- midSpeed (${midSpeed}) < h (${h})`);
      
      return _getSpeed(minSpeed, midSpeed - 1);
    }

    if (_getTime(midSpeed) > h) {
      console.log(`minSpeed = ${minSpeed} --- maxSpeed = ${maxSpeed} ---- midSpeed (${midSpeed}) > h (${h})`);
      
      return _getSpeed(midSpeed + 1, maxSpeed);
    }
  };

  let maxSpeed = piles[0];

  for (let i = 1; i < piles.length; i++) {
    if (maxSpeed < piles[i]) maxSpeed = piles[i];
  }

  return _getSpeed(1, maxSpeed);
};

console.log("-----------Test-------------");
console.log(minEatingSpeed([3000000000001], 3000000000000));
