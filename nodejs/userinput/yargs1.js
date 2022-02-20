// yargs which is npm module replace process agrument
// cmd: (node yargs.js --help) then it will show command 
const yargs=require('yargs');
//customize yargs version
yargs.version('17.3.1');

// create add command
yargs.command({
   command:'add', 
   describe:'add a new note',
   handler:function(){
       console.log('adding a new note');
   }
});
// remove  command
yargs.command({
command:'remove',
describe:'remove note',
handler:()=>{
  console.log('removing the note') ;
}

});

//list command
yargs.command({
 command:'list',
 describe:'list note',
  handler:()=>{
      console.log('Listing all note');
  }  
});

//read command
yargs.command({
command:'read',
describe:'read note',
handler:()=>{
    console.log('reading all note');
}
});

 console.log(yargs.argv);