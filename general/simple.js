console.log('Add', '2' + 3) // 23 - If one string is present, other values are strings.

console.log('Add Boolean', 2 + true); // 3 - Boolean will be made integer(true is 1 & false is 0)

console.log('Minus', "5" - 2); // 3 - for minus integer will be parsed from string.

console.log('Multiply', "x" * 2); // NAN - x is parsed and it is NAN.

console.log('Decimal addition', 0.1 + 0.2);

const numArray = [0, 1, 2, 3];
numArray[10] = 11;
console.log('Access out of length Array', numArray);// 0, 1, 2, 3,,,,,,, 11 - returns array with 11 values with empty values in between.

function test3(num) {
    return
    [num]
}
console.log(`Return next line`, test3(10)); // undefined. return adds semicolon at the end and returns undefined.

var y = 1;
if (function f() { }) {
    y += typeof f;
}
console.log(y); // 1undefined

(function () {
    var a = b = 5;
})();
console.log('undefined b', b); // 5 - b is defined globally.

for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log('setTimeout', i), 0)
} // 4 4 4 4 - for loop runs and increments value to 4, setTimeout is moved to webAPIs once the loop runs
// and que is emoty then setTimeout is added to queue and to callstack and runs four times to show 4.

const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log('setting length to 0', clothes); // undefined - length = 0 sets empty array.

const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);
{
    // a simple block
    numbers.push(i + 1);
}
console.log('for loop with closing tags', numbers); // [5]

console.log('Access variable before declaration', myVar);   // undefined - hoisting moves declarations to the top.
// console.log(myConst); // reference error - const & let does not support hoisting.
var myVar = 'value';
const myConst = 3.14;

var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // outer func:  this.foo = bar
        console.log("outer func:  self.foo = " + self.foo); // outer func:  self.foo = bar
        (function () {
            console.log("inner func:  this.foo = " + this.foo); // inner func:  this.foo = undefined
            console.log("inner func:  self.foo = " + self.foo); // inner func:  self.foo = bar
        }());
    }
};
myObject.func();
