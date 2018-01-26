// alerts are annoying, let's use console.log
console.log('Welcome');
/*
This will now log to your console
*/
//  Create a function that updates a DOM element
function change(){
  // function body
  document.getElementById('foo').innerHTML = 'Welcome';
}

// Basic data types in javascript
var name = 'Lucille'; // Store a string in a variable
var numberOfWidgets = 10; // number
var isCodingCool = true; // boolean
console.log(name); // log the value of a var to the console

// store an array in a variable
var characters = [50, true,'Lucille', 'Michae Bluth', 'Tobias', 10, 2];
console.log(characters[0]);

var pie = [3.14, 'delicious', true]
console.log(pie[1]);
// Multi-dimensional array
var meat = ['ham', 'bologna', 'turkey'];
var fruit = ['oranges', 'bananas', 'apples'];
var food = [meat,fruit];
console.log(food[1][0]); // logs 'oranges' to the console

// Object:
var user = {
  firstName: 'Lucille',
  age: 40,
  lastName: 'Bluth',
  hasHair: true,
  'has-feet': true
};
// access properties of our user obj using dot notation
console.log(user.firstName); // log 'Lucille'
// we can also access properties on objs using bracket notation
console.log(user['firstName']); // log 'Lucille'
// two vars with nums
var one = 1;
var two = 2;
console.log([one], '+', [two], 'is:',[one+two]);
// two vars with strings
var stringy = 'one';
var string = 'two';
alert(stringy+string);
// object about me
var me = {
  firstName: 'Amber',
  lastName: 'Emmertz',
  fingerCount: 10,
  likesDogs: true,
  likesCats: true,
  petsNames: ['Frank','Toad']
}
console.log(me.petsNames);
