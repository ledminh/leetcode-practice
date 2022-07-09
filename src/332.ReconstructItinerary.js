/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const ticketsSorted = tickets.sort((t1, t2) =>
    t1[0] === t2[0] ? t1[1].localeCompare(t2[1]) : t1[0].localeCompare(t2[0])
  );

  const adjsList = {};

  for (let i = 0; i < ticketsSorted.length; i++) {
    if (!adjsList[ticketsSorted[i][0]]) {
      adjsList[ticketsSorted[i][0]] = [ticketsSorted[i][1]];
    } else {
      adjsList[ticketsSorted[i][0]].push(ticketsSorted[i][1]);
    }
  }

  const result = [];

  const _traverse = (curAirport) => {
    result.push(curAirport);

    const curDests = adjsList[curAirport];

    if (!curDests || curDests.length === 0) {
        if(result.length === tickets.length + 1){
            return true;
        }
        else {
            result.pop();
            return false;
        }
    }

    for (let i = 0; i < curDests.length; i++) {
      const nextDest = curDests[i];

      curDests.splice(i, 1);
      const found = _traverse(nextDest);

      if (found) {
        return true;
      } else {
        curDests.splice(i, 0, nextDest);
      }
    }
      
    result.pop();
    return false;
  };

  _traverse("JFK");

  return result;
};