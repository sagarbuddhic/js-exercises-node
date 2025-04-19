console.log('first');

setTimeout(() => {
    console.log('second');
}, 1000);

async function test() {
    const resolve = await Promise.resolve('third');
    return resolve;
}
const value = test();
console.log(value);
test().then((resolve) => console.log(resolve));

console.log('fourth');