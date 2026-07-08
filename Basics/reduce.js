let a = [1, 2, 3, 34, 5, 6, 7, 8];
let x = a.reduce(function (a, b) {
  return a + b;
});
console.log(x);