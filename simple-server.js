// A simple Node server

const http = require('http');

const server = http.createServer(function (req, res) {

   res.setHeader('Content-type', 'application/json');
   res.setHeader('Access-Control-Origin', '*');
   res.writeHeader(200);
   
   let dataObjct = JSON.stringify(
       { "id":0,
    "Organisation":'Life Choices',
     'Year': 2021-2022 })

   res.send(dataObjct);
   

});

server.listen(4422)
// {

// // console.log('Listening to port 4422')

// })