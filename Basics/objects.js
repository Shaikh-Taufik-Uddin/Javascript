let x = {
  name: "Taufik",
  age: 20,
  branch: "cse",
  isMarried: "false",
};
console.log(x);
console.log(x.age);
console.log(x["isMarried"]);
x.age = 30;
console.log(x.age);
for (const key in x) {
  if (!Object.hasOwn(x, key)) continue;
  console.log(key, x[key]);
}
