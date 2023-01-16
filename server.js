const http = require('http');
const StringDecoder = require('string_decoder').StringDecoder;
const fs = require('fs')
http.createServer((req, res) => {
    let data = '';
    let decoder = new StringDecoder('utf-8');
    req.on('data', chunk => {
        data += decoder.write(chunk);
    })
    req.on('end', () => {
        data += decoder.end()
        res.end('hello')
        console.log(data);
    })

}).listen(3000, () => {
    console.log('Server is running at localhost:3000');
})