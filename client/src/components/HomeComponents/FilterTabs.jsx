import { useState } from "react";
import SelectBox from "../SelectBox/SelectBox";
export default function FilterTabs (){
    const [selectedTaskId, setSelectedTaskId] = useState({
        value: 'choose any Task ID',
        label: 'choose any Task ID',
    });
   const taskIdOptions = [
    { value: '1', label: 'Task 1' },
    { value: '2', label: 'Task 2' },
    { value: '3', label: 'Task 3' },
   ]
   const onTaskIdChange = (value) => {
    console.log('Selected Task ID:', value);
    setSelectedTaskId(value);
    }
    
return (<>
    
<div className="border  border-gray-200  dark:border-gray-300 rounded-lg shadow-sm mx-auto flex gap-3 my-3 py-2 px-3 ">
  <SelectBox options={taskIdOptions} onChange={onTaskIdChange} selected={selectedTaskId}/>
  <SelectBox />

  <SelectBox />
  <SelectBox />
</div>

 </>)
}