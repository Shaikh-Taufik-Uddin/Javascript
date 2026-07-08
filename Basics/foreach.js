// foreach loop acts somewhat similar to forof but can take 3 parameters where the 1st one means the index , 2nd one means its index and 3d one means the actual array and it also doesnt relect back changes to original array

arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  element++;
  console.log(element);
});
arr.forEach((element, i, arr) => {
  console.log(element, i, arr);
});