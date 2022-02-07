let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send("Hello world!");
});

app.get('/data', function(req, res){
    let dataObjct = 
        { "id":0,
     "Organisation":'Life Choices',
      'Year': 2021-2022 }
    
    res.send(dataObjct);
});




app.listen(4000)



