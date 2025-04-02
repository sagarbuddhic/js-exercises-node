for (var i = 1; i <= 2; i++) {
  print(i);
}

function print(i) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
