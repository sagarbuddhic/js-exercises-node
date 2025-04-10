//You are given an integer mass, which represents the original mass of a planet.
// You are further given an integer array asteroids, where asteroids[i] is the mass of the ith asteroid.

let asteroidsDestroyed = (mass, astroids) => {
  const sorted = astroids.sort((a, b) => a - b);

  for (const astroid of sorted) {
    if (mass < astroid) return false;
    mass += astroid;
  }

  return true;
};

console.log(asteroidsDestroyed(10, [3, 9, 19, 5, 21]));
