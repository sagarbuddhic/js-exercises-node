// leetcode2126

let asteroidsDestroyed = (mass, astroids) => {
  const sorted = astroids.sort((a, b) => a - b);

  for (const astroid of sorted) {
    if (mass < astroid) return false;
    mass += astroid;
  }

  return true;
};

console.log(asteroidsDestroyed(10, [3, 9, 19, 5, 21]));
