/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  return position
    .reduce((result, p, i) => {
      result.push({
        pos: p,
        timeFinish: (target - p) / speed[i]
      });

      return result;
    }, [])
    .sort((a, b) => b.pos - a.pos)
    .reduce((result, car) => {
      if (result.length === 0) return [car];

      if (result[result.length - 1].timeFinish >= car.timeFinish) return result;

      return [...result, car];
    }, []).length;
};
