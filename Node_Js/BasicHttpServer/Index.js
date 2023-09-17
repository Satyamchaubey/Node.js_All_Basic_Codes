const http = require('http');
const port = 3000;
const fs = require('fs');

const server =  http.createServer((req,res)=>{
    console.log(req.url);

    let filePath;
    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
            case'/profile':
            filePath = './profile.html';
            break;
            case '/satyam':
                filePath = 'Satyam.html'
                break;
            default:
                filePath = './content.html';

    }
    fs.readFile(filePath, (err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.end(data);
    })
})

server.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("All ohky hai server.. kam kr rha hai lo port number...:"+port);
})