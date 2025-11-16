import React from 'react'

const AddHomework = () => {
  return (
    
    <div className="add-homework bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap gap-3 items-center">
			
		<input type="text" id="source" placeholder="Kaynak" 
			   className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-grow min-w-[150px]">
			</input>   
		<input type="text" id="topic" placeholder="Konu" 
			   className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-grow min-w-[150px]">
			</input>      
		<input type="text" id="pages" placeholder="Sayfa" 
			   className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-28"> 
			  </input>    
		<button id="btnAddHomework" 
				className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition duration-150 w-28">
			Ödevi Ekle
		</button>
	</div>
    
  )
}

export default AddHomework