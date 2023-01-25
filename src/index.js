
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let commonArray = [];
  for (i = 0; i < matrix.length; i++) {
    if (i % 2 === 0 || i === 0) {
      commonArray = commonArray.concat(matrix[i]);
    } else {
      commonArray = commonArray.concat(matrix[i].reverse())
    }
    
  }
  return Array.from(new Set(commonArray));
}
