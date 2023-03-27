const path= require('path');
const express= require('express');
const bodyParser = require('body-parser')
const app= express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'));


app.get('/', (req,res)=>{

    res.sendFile(path.join(__dirname, 'index.html'))
})



app.post('/processing', (req,res)=>{
    if(req.body.username === "admin" && req.body.password === "admin@123"){
        res.redirect('./success');
    }else {
        res.redirect('failure');
    }

  
})

app.get('/success', (req,res)=>{

    res.send('Successfully submited')
})




app.get('/failure', (req,res)=>{

    res.send('Wrong username or password !')
})


app.listen(8000);