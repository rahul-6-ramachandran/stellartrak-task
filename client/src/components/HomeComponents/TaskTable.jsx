import { useEffect, useState } from "react"
import { getTaskList } from "../../actions/taskList/taskListActions"

export default function TaskTable({filters}){
    
      const [taskData,setTaskData] = useState()
      const [loader,setLoader] = useState(false)
  useEffect(()=>{
    getAllTaskList()
  },[filters])

  
    const getAllTaskList = async()=>{
      setLoader(true)
      const activeFilters = await Object.fromEntries(
        Object.entries(filters).filter(([_, v]) => v !== '')
      );
       getTaskList(activeFilters)
       .then((res)=>{
           setLoader(false)
           console.log(res)
          setTaskData(res)
  
      })
    }

    return (
        <>
        {
            !loader ? (
                
<div className="relative overflow-auto max-h-[600px]  shadow-md sm:rounded-lg my-4 py-4 scroll">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="w-full  text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr className="">
                <th scope="row" className="px-6 py-4">
                    Task ID
                </th>
                <th className="px-6 py-4">
                    Task Name
                </th>
                <th className="px-6 py-4">
                    Completed Percentage
                </th>
                <th className="px-6 py-4">
                    Created Date
                </th>
                <th className="px-6 py-4">
                    Project Name
                </th>
                <th className="px-6 py-4">
                    Project ID
                </th>
                <th className="px-6 py-4">
                    Created By
                </th>
                <th className="px-6 py-4">
                    Task Owned By
                </th>
                <th className="px-6 py-4">
                    Actual Start Date
                </th>
                <th className="px-6 py-4">
                    Actual Close Date
                </th>
                <th className="px-6 py-4">
                    Last Modified Date
                </th>
            </tr>
       
        </thead>
        <tbody>
        {taskData?.length > 0 ? (
            taskData?.map((task) => ( 
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="col" className="px-6 py-3 ">
                   {task.Task_ID}
                </th>
                <td scope="col" className="px-6 py-3 w-20 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {task.Task_Name}
                </td>
                <td scope="col" className="px-6 py-3">
                    {task.Completed_percentage}
                </td>
                <td scope="col" className="px-6 py-3">
                    {new Date(task.Created_Datetime).toLocaleDateString()}
                </td>
                <td scope="col" className="px-6 py-3">
                    {task?.projectName}
                </td>
                <td scope="col" className="px-6 py-3">
                    {task?.Project_ID}
                </td>
                <td scope="col" className="px-6 py-3">
                    {task?.Created_EmployeeName}
                </td>
                <td scope="col" className="px-6 py-3">
                    {task?.Task_Owned_Emp_MobileNO}
                </td>
                <td scope="col" className="px-6 py-3">
                    {task?.Actual_Start_DateTime}
                </td>
                <td scope="col" className="px-6 py-3">
                    {task?.Actual_Close_Datetime}
                </td>
                <td scope="col" className="px-6 py-3">
                    {task?.LastModify_Datetime}
                </td>
                
            </tr>)
            )) : (
                <tr className='flex items-center justify-center w-full h-full'>
                    <th scope="col" className="px-6 py-3 w-full text-center font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        No Data Found
                    </th>
                </tr>
            )}
            
        </tbody>
    </table>
</div>
            ):(
                <div role="status" className='flex items-center justify-center w-full h-full'>
    <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
            )
        }


        </>
    )
}