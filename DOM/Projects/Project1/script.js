let x = document.querySelector("#l1");
function evolve() {
  x.innerHTML = "Pikachu";
  x.style.color = "yellow";
}
setTimeout(evolve, 2000);
setTimeout(() => {
  x.innerHTML = "Raichu";
  x.style.color = "orange";
}, 4000);
function chngpkmn(){
    x.innerHTML = "Squirtle";
    x.style.backgroundColor = "gray";
}
x.addEventListener("click", chngpkmn);
let y = document.querySelector("#l2");
y.addEventListener("mouseenter",function () {
    y.innerHTML = "Charmelion";
    y.style.backgroundColor = "white";
})
y.addEventListener("mouseleave", function () {
  y.innerHTML = "Charmender";
    y.style.backgroundColor = "black";
});
let z = document.querySelector("#l3")
y.addEventListener("click", function () {
  z.style.backgroundColor = "purple";
});
y.addEventListener("mouseleave", function () {
  z.style.backgroundColor = "black";
});