var a = 7; // var means variable
console.log(a);
const b = 3.14;
console.log(b); // constant variables can never be changed
console.log(a + b);
a = 69;
console.log(a);

// cpp vs js compiling process

const c = 9;
console.log(c); // this line will be printed 
c = 10;
console.log("this is an error line");

// in cpp
// const int c = 9;
// cout << c; // this line wont be printed despite this is not an error line
// c = 10;
// cout << c;

// this is because js compiles line by line while cpp compiles the whole code at a time