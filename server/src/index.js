import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 7700;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { 
    res.send({message:"Succesfully connected"})
})

app.listen(PORT,()=>{
    console.log("Successfully Connected to port 7700")
})