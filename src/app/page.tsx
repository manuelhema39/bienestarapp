'use client'
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import Menu from "./componentes/menu";

export default function Home() {
  const [nombreTarea,setNombreTarea]=useState("");
  const [listaTarea, setListaTarea] : any = useState([]);
  const [Llaves,setLlaves]=useState(0);
 
const nuevaLlave=()=>{
  setLlaves(Llaves+1);
  listaTarea.push({"Id":Llaves,"Nombre":nombreTarea});
  setNombreTarea("");
 
}

  return (
    <div>
      <div className="centrar">
        <h1 className="font-bold uppercase ...">Listas de Tareas</h1>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="centrar ...">
         Menu Vertical  
        <Menu/>
        </div>
        <div className="col-span-4 ...">
        
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative">
              <input type="text" value={nombreTarea}  onChange={e => setNombreTarea(e.target.value)} id="InputTarea" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nueva Tarea" required/>
              <button type="button" onClick={nuevaLlave} className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={nombreTarea ? false : true}>
              Agregar Tarea
              </button>
            </div>                                
          
            {
              
              listaTarea.map((Tarea:any)=>(
                  <div id="contenedorTareas" className="grid grid-cols-4 gap-1" key={Tarea.Id}>
                    <div className="espacios">
                      <input id="default-checkbox" type="checkbox"/>
                    </div>
                    <div className="centrarDiv">
                    {
                      Tarea.Nombre
                    }
                    </div>
                    <div className="espacios">
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Editar
                      </button>
                    </div>
                    <div className="espaciosDos">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
                          Eliminar
                        </button>
                      </div>
                  </div>
                 )
               )
            }
        
          </div>
      
        </div>
      <div>
            fila 1
      </div>
      <div>
        fila 2
      </div>
      <div>
        fila 3
      </div>
      </div>
    </div>

  );
}
