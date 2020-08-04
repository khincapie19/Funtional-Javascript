function doubleAll(numbers) {
  return numbers.map(function(num){
    return num * 2
  });
}

module.exports = doubleAll





/*function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}
numbers = [2,3,14,15,16,17,18,14,15]
module.exports = doubleAll

console.log(doubleAll(numbers))
*/
