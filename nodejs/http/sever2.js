const http=require('http');

const server=http.createServer((req,res)=>{
   res.setHeader('Content-Type','text/plain');
res.end('hello world lol');
});

const PORT=process.env.PORT || 8000;
const HOST='localhost';
server.listen(PORT,HOST,()=>{
   console.log('Server running at http://localhost:8000'); 
});
