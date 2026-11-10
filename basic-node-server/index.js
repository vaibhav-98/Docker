const express = require('express')

const app = express();

app.get('/home', (req,res) => {
    
    res.json({message: 'ok'})
})

app.listen(3000,() => {
    console.log("started the server ");
    
})