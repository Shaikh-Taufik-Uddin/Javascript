function double(ele) {
  return 2 * ele;
}
let arr = [1, 2, 3, 4, 5, 6];
let brr = arr.map(double);
console.log(brr);

let crr = arr.map(ele => ele * 3); // shortcut -> takes an element and returns thew given work
console.log(crr);
