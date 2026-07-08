let a = [43, -4, -2, -90, 8, -1, 0];
a.sort((a, b) => Math.abs(a) - Math.abs(b));
console.log(a);