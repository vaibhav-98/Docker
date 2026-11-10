const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express();

app.get('/home', (req,res) => {
    return res.json({message: "Welcome Home"})
})

app.get('/info', (req,res)=> {
    return res.json({message: "information"})
})

app.get('/about', (req,res) => {
    return res.json({message: "about"})
})
app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT: ${process.env.PORT}`);
    
})