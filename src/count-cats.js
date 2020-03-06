module.exports = function countCats(matrix) {
  let count=0;
  matrix.forEach(element => {
    element.forEach(Element => {
      if(Element==='^^')count++;
    })
  });
  return count;
};
