// print number from 1 to 10 but with a delay of 1 second after each number is printed

for (let i = 1; i <= 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

for (let i = 10; i > 0; i--) {
  // in this case the delay makes it get printed in reveser order rather than 10 -> 1 , it gets 1 -> 10 . if we want to make it same order again we have to do 11-i to balance it out at any one place
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
