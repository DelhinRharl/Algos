const mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add('some text'); // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o is referencing a different object, so this is okay

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true

mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // removes 5 from the set

mySet.has(5); // false, 5 has been removed

mySet.size; // 4, we just removed one value

// iterate over items in set
for (let item of mySet) console.log('this',item);

// convert set to array
const myArr = Array.from(mySet); // [1, "some text", {a: 1, b: 2}]

// Sets are iterable, so you can use them in a for...of loop
for (let item of mySet) console.log(item);

// Set [ 1, "some text", {a: 1, b: 2} ]
mySet.forEach(function(value) {
  console.log(value);
});

// Use the spread operator to convert a Set into an Array   
const myArrs = [...mySet];


