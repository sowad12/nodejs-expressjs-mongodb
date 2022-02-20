
const validator=require('validator');

console.log(validator.isEmail('ashfaqulislam4566@gmail.com'));// return true
console.log(validator.isEmail('ashfaqulislam4566.com'));//return false

const str='';
console.log(validator.isEmpty(str));//return true
console.log(validator.isURL('https://google.com'));//return true
console.log(validator.isURL('https//google.com'));//return false





