
import { useEffect } from 'react'
import './App.css'
import AddClass from './components/AddClass'
import AddHomework from './components/AddHomework'
import HomeworkTable from './components/HomeworkTable'
import { FaTree } from "react-icons/fa";
function App() {  

  return (
    <div className="font-sans bg-gray-100 p-5 md:p-10">
      
        <div className="flex justify-between items-center mb-2">
          <FaTree /> 
		<h1 className="text-xl font-bold text-gray-800">Çınarlar Vip Ödev Takip</h1>
		
		<div className="flex gap-3 items-center">
			<button id="btnExportJSON" className="bg-gray-600 text-white p-2 rounded-lg text-sm hover:bg-gray-700 transition duration-150">
				💾&nbsp;Yedekle
			</button>
			<button id="btnImportJSONTrigger" className="bg-gray-600 text-white p-2 rounded-lg text-sm hover:bg-gray-700 transition duration-150">
				📥&nbsp;Yükle
			</button>
			<input type="file" id="fileImport" accept=".json" className="hidden"></input>
		</div>
    </div>
        <AddClass/> 
        <AddHomework/>     
        <HomeworkTable/>
    </div>
  )
}

export default App
