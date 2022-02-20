// in this command first write in cmd 'node filename  then write multiple string or number
//which is like c++ vector dynamic allocation
console.log(process.argv);// return an array 
//by default process array hold two nodejs and file path 
// if i write in cmd 'node process_argument.js sowad(or any type of string,number)'
//arr[2] hold this value
console.log(process.argv[2]);// return arr[2] value
console.log(process.argv[3]);// return arr[3] value
console.log(process.argv[4]);// return arr[4] value
//in cmd---- node process_argument.js 10 

const input=process.argv[2];
if(input>=10)console.log('Above 10 years old or same age');
else console.log('below 10 years')