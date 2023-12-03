const ask = require('prompt-sync')();
// console.log('hello world');
// console.log('new test for push');
// console.log('teste switch branch');
// console.log('teste switch for third branch');
// let question1 = ask(
//   'if you want say your year of birth type 1 | if you want write you current age write 2  '
// );
const canIDrink = 18;
let age = 0;
let question1 = ask(
  'if you want say your year of birth type 1 | if you want write you current age write 2  '
);

while (question1 >= 3) {
  question1 = ask(
    'if you want say your year of birth type 1 | if you want write you current age write 2  '
  );
}

if (question1 == 1) {
  age = ask('write your year of birth ');
}
if (question1 == 2) {
  age = ask('write your current age ');
}

if (age >= canIDrink) {
  console.log('yes you can ');
} else {
  console.log('no you can not ');
}
