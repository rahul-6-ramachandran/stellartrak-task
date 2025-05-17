import express from 'express';
import cors from 'cors';
import dotenv, { configDotenv } from 'dotenv';
// routes
import {taskRoutes}  from './routes/index.js';


// middlewares
const app = express();
configDotenv()
const PORT = process.env.PORT || 7700;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { 
    res.send({message:"Succesfully connected"})
})

app.use('/api/taskList',taskRoutes) 
app.listen(PORT,()=>{
    console.log("Successfully Connected to port 7700")
})