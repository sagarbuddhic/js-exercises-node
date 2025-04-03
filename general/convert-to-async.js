function asyncTask() {
  return functionA()
    .then((valueA) => functionB(valueA)) // Pass valueA to functionB
    .then((valueB) => functionC(valueB)) // Pass result of functionB to functionC
    .then((valueC) => functionD(valueC)) // Pass result of functionC to functionD
    .catch((err) => logger.error(err)); // Handle any errors
}

async function asyncTask() {
  try {
    const valueA = await functionA();
    const valueB = await functionB(valueA);
    const valueC = await functionC(valueB);
    return await functionD(valueC);
  } catch (err) {
    logger.error(err);
  }
}
