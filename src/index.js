module.exports = function reverse (n) {
  let revIndex = [];
  let result = [];
  let num = n.toString().split('');
  for (let i = 0; i < num.length; i++) {
    revIndex.push(i)
  }
  revIndex = revIndex.sort((a, b) => b - a);
  for (let i = 0; i < revIndex.length; i++) {
    result.push(num[revIndex[i]])
  }
  return parseInt(result.join(''))
}
