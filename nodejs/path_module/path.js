const path=require('path');
console.log(__dirname);//directory name where file located
console.log(__filename);// directory name with file name
console.log(path.dirname('F:/nodejs/path_module/path.js')); //or path.dirname(__filename)
console.log(path.extname('F:/nodejs/path_module/path.js')); //or path.extname(__filename)
console.log(path.basename('F:/nodejs/path_module/path.js')); // same cmnt
console.log(path.isAbsolute('F:/nodejs/path_module/path.js')); //same cmnt
console.log(path.parse('F:/nodejs/path_module/path.js'));  //same cmnt //parse return object


