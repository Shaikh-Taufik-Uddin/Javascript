// forof loop just accesses the element one by one and we can change the value of that element in that instance but it wont be reflected in actual array
arr = [1, 2, 3, 4];
for (let element of arr) { // we cant take const element because const types cant be changed
  element *= 2;
  console.log(element);
}
console.log(arr);
