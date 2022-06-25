/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const cache = {};
  let start = 0, end = 0, maxL = 0;
  
  while(end < s.length) {
      // push charAt(end) to the cache
      
      if(!cache[s.charAt(end)]) {
          cache[s.charAt(end)] = 1;
      }
      else {
          cache[s.charAt(end)]++;
      }
      
      // check if substring from start to end valid
          //find the maxOccurence of any char in the substring
          const chars = Object.keys(cache);
          let maxOccurence = cache[chars[0]];
      
          for(let i = 0; i < chars.length; i++) {
              if(maxOccurence < cache[chars[i]])
                  maxOccurence = cache[chars[i]];
          }
          
          // a substring is valid when its length after substracted from
          // maxOccurence is less than or equal to k
          if((end - start + 1) - maxOccurence <= k) {
              //substring is valid, check if its length is max
              if((end - start + 1) > maxL)
                  maxL = (end - start + 1);
          }
              // --> if it's invalid, decrease the length of the string until it's valid
              // --> short-circuit when start === end
          else {
              while(start < end && ((end - start + 1) - maxOccurence > k)) {
                  cache[s.charAt(start)]--;
                  start++; // if it's not valid, decrease the length and continue checking    
              }                
          }

          
          end++;
      
  }
  
  return maxL;
  
};
console.log('=======================');
console.log(characterReplacement("IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR",
2
))