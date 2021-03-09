
exports.min = function min (array) {
  if (!array || array.length === 0) return 0;
  const arr = [...array];
  return arr.sort((a,b)=> (a-b))[0]
}

exports.max = function max (array) {
  if (!array || array.length === 0) return 0;
  const arr = [...array];
  return arr.sort((a,b)=> (b-a))[0]
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0;
  const sum = array.reduce((sum, current) => sum + current, 0);
  return sum / array.length;
}
