arr = [1, 2, 3, 5, 45];
console.log(arr);
console.log(arr.length); // tells array length
arr.push(10); // inserts element at last index
console.log(arr);
arr.pop(); // pops element from last index
console.log(arr);
arr.unshift(2); // inserts element at 1st index
console.log(arr);
arr.shift(); // pops element from 1st index
arr[0] = 5;
console.log(arr);
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
