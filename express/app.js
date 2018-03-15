var express = require('express');
var nodemailer = require ('nodemailer');
var bodyParser = require('body-parser');
var app = express();

app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.json());
app.post('/', function (req, res) {
    let transporter = nodemailer.createTransport({
        service: 'Hotmail',
        auth:{
            user: 'imjians@hotmail.com',
            pass: ''
        }
    })

    let email = req.body.data.email;
    let message = req.body.data.message;
    let phone = req.body.data.mobile;
    let name = req.body.data.name
    let text = "Email:"+ email + " " + "Phone:" + phone +" "+"Name:" +name+ " " + "Message:"+message;

    let mailOptions = {
        from: 'imjians@hotmail.com', // sender address
        to: 'shijian0602@hotmail.com', // list of receivers
        subject: 'CV Email', // Subject line
        text: text
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
            res.json({request: req});
        };
    });
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});