import { useState } from 'react'

import './App.css'
import TaskTable from './components/HomeComponents/TaskTable'
import HomeLayout from './components/Layouts/HomeLayout/HomeLayout'
import FilterTabs from './components/HomeComponents/FilterTabs'

function App() {

  return (
    <>
{/* {/*     */}
    <HomeLayout> 
      <FilterTabs/>
      <TaskTable/>
    </HomeLayout>
     </>
  )
}

export default App
