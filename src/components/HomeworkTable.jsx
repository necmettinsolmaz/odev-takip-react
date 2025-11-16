import React from 'react'

const HomeworkTable = () => {
  return (
   <div id="tableContainer">
		<div id="tableHeaderArea" className="mt-4 mb-3 flex justify-between items-center p-2 bg-white rounded-lg shadow-md">			
		
			<h2 id="currentClassNameDisplay" className="text-l font-bold text-gray-700">Lütfen Bir Sınıf Seçin</h2>			
			<div className="flex gap-3 items-center">
				<button id="btnSaveStatuses" className="bg-red-500 text-white p-2 rounded-lg text-sm hover:bg-red-600 transition duration-150 hidden">
					Kaydet
				</button>
				
				
				
				<button id="btnShareToParent" className="bg-purple-600 text-white p-2 rounded-lg text-sm hover:bg-purple-700 transition duration-150">
					📸&nbsp;Paylaş
				</button>
				<button id="btnExportCSV" className="bg-gray-600 text-white p-2 rounded-lg text-sm hover:bg-gray-700 transition duration-150">Excele Aktar</button>			
			</div>	
		</div>
		<div className="overflow-x-auto shadow-lg rounded-lg">
			<table id="homeworkTable" className="min-w-full divide-y divide-gray-200">
				<thead id="tableHead" className="bg-blue-600">
				</thead>
				<tbody id="homeworkBody" className="bg-white divide-y divide-gray-200">
				</tbody>
			</table>
		</div>
	</div>
  )
}

export default HomeworkTable