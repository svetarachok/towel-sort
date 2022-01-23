
// You should implement your task here.

module.exports = function towelSort(matrix = []) {

  let result = [];
    
  if (matrix.length == 0) {
      result = [];
    } else {
      for (let index in matrix) {
        if (index % 2 != 0) {
          matrix[index] = matrix[index].reverse()
        };
      }  
  
      result = matrix.reduce((acc, item) => acc.concat(item));
  } 
  
  return result
  }
