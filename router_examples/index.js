var express= require('express');
var router=express.Router();
console.log('start......');
router.get('/',function(req,res){
	res.send('welcome to router page');
})
	router.post('/',function(req,res){
		res.send('hai everyone');
	})
	router.put('/',function(req,res){
		res.send('this is put function');
	})
	router.delete('/',function(req,res){
		res.send('this is delete operation');
	})



module.exports = router;