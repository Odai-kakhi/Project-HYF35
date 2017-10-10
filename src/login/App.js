var http = require('http')
var fs = require('fs')
var bodyParser = require('body-parser');
var express = require('express')
var querystring = require('querystring')
var app = express()


var routes = require('./routes/index')  
app.set('views', path.join(__dirname, 'views'));

app.get('/',(request,response)=>{
response.end(JSON.stringify(request.body))
response.render('./index.html')
})

// var myhtpp = http.createServer((request, response) => {
//     response.writeHead(200)
//     fs.readFile('./index.html', null, (error, data) => {
//         if (!!error) {
//             response.writeHead(404)
//             response.write('file Not found')
//         } else {
//             response.write(data)
//         }
//         response.end()
//     })


// })
// myhtpp.listen(8888, '127.0.0.1')
app.listen(8888, '127.0.0.1')
console.log('we listen to port 8888 !')