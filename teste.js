const ask = require('prompt-sync')();
//teste
const canIDrink = 18;
let age = 0;

console.log('lets see if you can drink some beers');

let question1 = ask(
  'if you want say your year of birth type 1 | if you want write you current age write 2  '
);

while (question1 >= 3) {
  question1 = ask(
    'if you want say your year of birth type 1 | if you want write you current age write 2  '
  );
}

if (question1 == 1) {
  let response = ask('write year of birth ');
  let today = new Date();
  let year = today.getFullYear();
  let responseset = year - response;
  age = responseset;
}
if (question1 == 2) {
  age = ask('write your current age ');
}

if (age >= canIDrink) {
  console.log(`you are ${age} yes you can `);
} else {
  console.log(`you are ${age} no you can not `);
}
