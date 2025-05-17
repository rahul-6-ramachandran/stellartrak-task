// import { useState } from "react";
// import SelectBox from "../SelectBox/SelectBox";
// export default function FilterTabs (){
//     const [filters,setFilters] = useState({
//         Task_ID : '',
//         Task_Name : '',
//         Description : '',
//         Project_ID : '',
//         Main_Task : '',
//         Task_Owned_EmployeeId : '',
//     })
//     // const [selectedTaskId, setSelectedTaskId] = useState({
//     //     value: 'choose any Task ID',
//     //     label: 'choose any Task ID',
//     // });
//    const taskIdOptions = [
//     { value: '1', label: 'Task 1' },
//     { value: '2', label: 'Task 2' },
//     { value: '3', label: 'Task 3' },
//    ]
//    const onTaskIdChange = (value) => {
//     console.log('Selected Task ID:', value);
//     setSelectedTaskId(value);
//     }
    
// return (<>
    
// <div className="border  border-gray-200  dark:border-gray-300 rounded-lg shadow-sm mx-auto flex gap-3 my-3 py-2 px-3 ">
//   <SelectBox 
//   options={taskIdOptions} 
//   onChange={onTaskIdChange} 
//   selected={selectedTaskId}
//   />
//   <SelectBox />

//   <SelectBox />
//   <SelectBox />
// </div>

//  </>)
// }
import { useEffect, useMemo, useState } from "react";
import SelectBox from "../SelectBox/SelectBox";
import { getTaskList } from "../../actions/taskList/taskListActions";

export default function FilterDrawer({filters ,setFilters }) {
  const [isOpen, setIsOpen] = useState(false);
 
  
  const [taskData,setTaskData] = useState()
      
  useEffect(()=>{
    getAllTaskList()
  },[])

  
    const getAllTaskList = async()=>{
      const activeFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, v]) => v !== '')
      );
       getTaskList(activeFilters)
       .then((res)=>{
           console.log(res)
          setTaskData(res)
  
      })
    }

  const taskIdOptions = useMemo(() => {
    const unique = [...new Set(taskData?.map((task) => task.Task_ID))];
    return unique.map((id) => ({ value: id, label: `Task ${id}` }));
  }, [taskData]);

  const taskNameOptions = useMemo(() => {
    const unique = [...new Set(taskData?.map((task) => task.Task_Name))];
    return unique.map((name) => ({ value: name, label: name }));
  }, [taskData]);

  const projectOptions = useMemo(() => {
    const unique = [...new Set(taskData?.map((task) => task.Project_ID))];
    return unique.map((id) => ({ value: id, label: `Project ${id}` }));
  }, [taskData]);

  const employeeOptions = useMemo(() => {
    const unique = [...new Set(taskData?.map((task) => task.Task_Owned_EmployeeId))];
    return unique.map((id) => ({ value: id, label: `Employee ${id}` }));
  }, [taskData]);



  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setIsOpen(false);
  };

  const handleApply = () => {
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, v]) => v !== '')
    );
    setFilters(activeFilters);
    setIsOpen(false);
  };

  const handleClear = () => {
    setFilters({
      Task_ID: '',
      Task_Name: '',
      Project_ID: '',
      Task_Owned_EmployeeId: ''
    });
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 flex bg-blue-600 text-white rounded-full items-end  text-center gap-1"
      >
        Filters <img src="/images/filter.png" alt="" className="w-4 text-white "/>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0   bg-opacity-40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 flex flex-col gap-4">
          <h2 className="text-lg font-bold mb-4">Filter Tasks</h2>

          <SelectBox
            options={taskIdOptions}
            selectedValue={filters.Task_ID || ''}
            onChange={(val) => handleChange("Task_ID", val)}
            placeholder="Choose Task ID"
          />

          <SelectBox
            options={taskNameOptions}
            selectedValue={filters.Task_Name || ''}
            onChange={(val) => handleChange("Task_Name", val)}
            placeholder="Choose Task Name"
          />

          <SelectBox
            options={projectOptions}
            selectedValue={filters.Project_ID || ''}
            onChange={(val) => handleChange("Project_ID", val)}
            placeholder="Choose Project ID"
          />

          <SelectBox
            options={employeeOptions}
            selectedValue={filters.Task_Owned_EmployeeId || ''}
            onChange={(val) => handleChange("Task_Owned_EmployeeId", val)}
            placeholder="Choose Employee"
          />

          <button
            onClick={handleClear}
            className="mt-4 px-4 bg-blue-600 text-white py-2 rounded-full"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
}
