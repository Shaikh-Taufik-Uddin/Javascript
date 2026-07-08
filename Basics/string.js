let a = "    Taaaaau fik    ";
console.log(a, a.length); // index are just like c/cpp
console.log(a[3]);
console.log(a.toUpperCase()); // actual string is not changed and a new string is generated
console.log(a.toLowerCase());
console.log(a);
console.log(a.trim()); // erases spaces from front and behind but not from middle
console.log(a.indexOf("a")); // picks 1st index of all occurences
console.log(a.lastIndexOf("a")); // picks the last index amongst all occurences
console.log(a.slice(5)); // everything before index 5 is eleminated
console.log(a.slice(5, 10)); // we get a substring from index 5 to 10-1 = 9 // by this method also the main string is intact and a new string is displayed 
let s = "i am a boy";
let s2 = "i , am, a, student";
console.log(s.split(" ")); // the string can be separated by given parameters (here space)
console.log(s2.split(",")); // the string can be separated by given parameters (here comma)
