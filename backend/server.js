const express=require('express');
const app=express();
const cors= require("cors");
const pool = require('./database');
const morgan = require('morgan');

app.use(cors());
app.use(express.json());



app.listen(5000, ()=>{console.log('server has started on port 5000.')})
app.use(morgan('tiny'));

app.get('/bats', async(req,res)=>{
    try{
        const allbatiments = await pool.query("SELECT * FROM batiments")
        res.send(allbatiments.rows)
    }
    catch(err){
        console.error(err.message)
    }
})

app.get('/bats/to_be_treated', async(req,res)=>{
    try{
            const batiment = await pool.query("SELECT id, lien_api, materiau_result FROM batiments WHERE materiau_correct is NULL ORDER BY random() LIMIT 1")
        res.json(batiment?.rows[0])
    }
    catch(err){
        console.error(err.message)
    }
})


app.get('/bats/:id_bat', async(req,res)=>{
    try{
        const { id_bat } = req.params
        const batiment = await pool.query("SELECT id, lien_api, materiau_result, materiau_correct FROM batiments WHERE id = $1", [id_bat])
        res.json(batiment?.rows[0])
    }
    catch(err){
        console.error(err.message)
    }
})

app.put('/bats/:id_bat', async(req, res)=>{
    try{
        const { id_bat } = req.params
        console.log(req.body)
        const { materiau_correct } = req.body;
        const updatedBat = await pool.query("UPDATE batiments SET materiau_correct = $1 WHERE id = $2"
            , [materiau_correct, id_bat])
        res.status(201)
        res.send()
    }
    catch(err){
        console.error(err.message)
    }

})
