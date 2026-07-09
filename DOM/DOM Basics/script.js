let x = document.querySelector("h1");
x.style.color = "red";
let y = document.querySelector("h2");
y.style.color = "blue";
let z = document.querySelector("h3");
z.innerHTML = "changed the text ";
z.style.color = "green";
setTimeout(function () {
    y.innerHTML = "Changed after 2 sec"
}, 2000);