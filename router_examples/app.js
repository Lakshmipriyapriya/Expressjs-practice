var express= require('express');
var app=express();
var router = require('./index');
var http = require('http')
var send = require('send')
console.log('home page');
app.use('/bava',router);

 app.get('/',function(req,res){
 	res.send('basic application for routers');

app.use('/get',router);
app.get('/welcome',function(req,res){
	res.send('hai');
});
app.use('/post',router);
app.get('/hello',function(req,res){
	res.send('new page');
})
app.all('/data',function(req,res){
	res.send('welcome to data section');
})
app.get('/about',function(req,res){
	res.send('about');
})
app.post('/users/:userId /name/:name', function (req, res) {
  res.send('userId: '+req.params.userId);
})
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd');
});
app.get('/ab+cd', function (req, res) {
  res.send('ab+cd');

})
app.get('/[1-9]{4}',function(req,res){
	res.send('pattern correct');
})
app.get('*',function(req,res){
	res.send('invalid');
})
app.get('/ab*cd',function(req,res){
	res.send('the input matched');
})
app.get('/ab(cd)?e',function(req,res){
	res.send('thank you for correct input');
})
app.get('/a',function(req,res){
	res.send('the given input is matched with the condition');
})
app.get(/.*er$/,function(req,res){
	res.send('pattern matched');
})
app.get('/bus/:from-:to',function(req,res){
	res.send('buses available from:'+req.params.from+' '+'to' +' '+req.params.to);
})
app.get('/example/a', function (req, res) {
  res.send('Hello from A!')
})
var name = function (req, res, next) {
  console.log('fullname')
  next()
}

var password = function (req, res, next) {
  console.log('correct password')
  next()
}

var login = function (req, res) {
  res.send('sucessfuly loged in!')
}
//console.log()

 app.get('/login/page', [name, password, login])


app.listen(3000);