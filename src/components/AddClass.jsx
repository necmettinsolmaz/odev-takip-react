import React, { useEffect, useRef, useState } from 'react'
import { SiGoogleclassroom } from "react-icons/si";
const AddClass = () => {
    // 1. SELECT için Sınıf Listesi State'i
    const [classes, setClasses] = useState([]);
    
    // 2. INPUT için Yeni Sınıf Adı State'i
    const [newClassName, setNewClassName] = useState("");

    const [selectedClass, setSelectedClass] = useState("");
    // A. YÜKLEME (Component ilk yüklendiğinde localStorage'dan veriyi çeker)
    useEffect(() => {
        const savedClasses = JSON.parse(localStorage.getItem("classes") || '[]');
        setClasses(savedClasses);
    }, []);

    // B. EKLEME İŞLEMİ (State ve localStorage'ı senkronize günceller)
    const handleAddClass = () => {
        if (!newClassName.trim()) return; // Boşsa işlemi durdur

        const updatedClasses = [...classes, newClassName.trim()];
        
        // 1. State'i Güncelle (Select'in yenilenmesini sağlar)
        setClasses(updatedClasses);
        
        // 2. localStorage'ı Güncelle (Kalıcılığı sağlar)
        localStorage.setItem("classes", JSON.stringify(updatedClasses));
        
        // 3. Input'u temizle
        setNewClassName("");
    };
    const handleClassSelection = ((event) =>{
        const selectedValue = event.target.value
        console.log(selectedValue)
        setSelectedClass(selectedValue)
    })
  return (
    <>
    <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap gap-3 items-center">
        
        <input type="text" id="newClassName" placeholder="Yeni Sınıf Adı" 
            className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-grow min-w-[150px]"               
            value={newClassName}
            onChange={(e)=>setNewClassName(e.target.value)}
            >
        </input>
        <button id="btnAddClass" 
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-150"
                onClick={handleAddClass}>
            Sınıf Ekle
        </button>
         <select id="classSelect" 
                className="p-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 min-w-[150px]"
                onChange={handleClassSelection}
                value={selectedClass}
                >
                
             <option value="">Sınıf Seçiniz</option>
            {classes.map((clas, i) => <option key={i} value={clas}>{clas}</option>)}
        </select>
        
        <button id="btnEditClass" 
                className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition duration-150">
            Sınıf Adını Düzenle
        </button>
        
        <input type="text" id="newStudent" placeholder="Yeni Öğrenci Adı" 
               className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-grow min-w-[150px]">
        </input>
        <button id="btnAddStudent" 
                className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition duration-150">
            Öğrenci Ekle
        </button>
    </div>
   
   
    </>
  )
}

export default AddClass