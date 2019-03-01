const express= require('express');
const jwt=require('jsonwebtoken');

const app=express();
const key='secret_test'

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('/api',function(req,res){
    res.json({data:'hello'})
})

app.post('/api/user', function(req, res){
    const user={
        user:req.user,
        password:req.password
    };
    
    const token=jwt.sign(user, key)
    res.send(token)
})

app.get('api/user',chkToken, function(req, res){
    jwt.verify(req.token, key, function(err,data){
        if(err){
            res.sendStatus(403)
        } else{
            res.send(data)
        }
    })
})

function chkToken(req,res,next){
    const token = req.headers['token']
    if(token){
        const bearer=token.split(' ')[1];
        req.token=bearer;
        next();
    }
    res.sendStatus(401);
}

app.listen(3001, function(){
    console.log('its running dear...')
})
