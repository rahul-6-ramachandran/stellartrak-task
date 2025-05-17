import Axios from "../../config/axios";


export const getTaskList = async(filters)=>{
        try {
        const response = await Axios.get('api/tasklist', {
            params: filters
        });
        
        console.log(response.data)
        return response.data; 

        } catch (error) {
            const err = new Error(error.response.data.message || 'Error fetching task list');
        console.error('Error fetching task list:',err);
        }

}