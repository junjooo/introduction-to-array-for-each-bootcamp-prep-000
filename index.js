function doToEvens(callback) {
  evens.forEach(callback)
}
function square(n) {
  console.log(n * n)
}
function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}
