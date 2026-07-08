// funtion itself passed as an argument in a function
function product(a, b, c) {
  return a * b * c;
}
function sum(a, b, c) {
  return a + b + c;
}
function sub(x, y) {
  // here the parameters x and y are not any values but the funtion itself .
  a = x(2, 5, 7);
  b = y(1, 3, 5);
  console.log(a - b);
}
sub(product, sum);
