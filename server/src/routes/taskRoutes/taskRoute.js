import express from 'express'
import axios from 'axios'
const router = express.Router()

router.get('/',async(req,res)=>{
    try{
        const queryParams = req.query;
    console.log(req.body)
    const response = await axios.get(process.env.TASK_LIST_API,
        {
            params: queryParams
        }
    )
    console.log(response.data)  
    return res.send(response.data.Task_listResult)
    }catch(err){
        console.log(err)
        return res.status(500).send({message:"Error in fetching data"})
    }
})

export default router