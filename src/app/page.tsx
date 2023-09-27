'use client'
import Link from "next/link"
import CasillaVerificacion from "./componentes/Casilla";
import React, { useState, useEffect } from 'react';

const misTareas=[];

export default function Home() {
  const [nombreTarea,setNombreTarea]=useState("");
  const [listaTarea, setListaTarea] = useState([]);
  const [Llaves,setLlaves]=useState(0);
/********************************  */
 
const nuevaLlave=()=>{
  console.log("click");
  setLlaves(Llaves+1);
  listaTarea.push({"Id":Llaves,"Nombre":nombreTarea});
  setNombreTarea("");
  //setLlaves(Llaves+1);
}

useEffect(() => {
  console.log(listaTarea)

})




/********************************* */
 /* const [Tarea, setTarea] = useState();
  const [count,setCount]=useState(0)
  const miInput=document.getElementById("InputTarea");
*/
   /* useEffect(() => {
        const miInput=document.getElementById("InputTarea");
        const Lista=document.getElementById("ListaTareas");
       // console.log(misTareas)
        if(count!==0){
            const divTareas=document.getElementById("contenedorTareas");
            const divContenedorVerificacion=document.createElement("div");
            divContenedorVerificacion.className="espaciosDos";
            const casillaVerificacion=document.createElement("input");
            casillaVerificacion.type="checkbox";
            casillaVerificacion.className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
            divContenedorVerificacion.appendChild(casillaVerificacion);
            const divContenedorNombreTarea=document.createElement("div");
            const textNode=document.createTextNode(miInput.value);
            divContenedorNombreTarea.appendChild(textNode);
            divContenedorNombreTarea.className="espacios";
            divTareas.appendChild(divContenedorVerificacion);
            divTareas.appendChild(divContenedorNombreTarea);
            miInput.value="";
         
        }
    });*/


//e => setNombreTarea(e.target.value)
  return (
    <div className="centrar">
        <h1 className="font-bold uppercase ...">Listas de Tareas</h1>
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative">
            <input type="text" value={nombreTarea}  onChange={e => setNombreTarea(e.target.value)} id="InputTarea" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nueva Tarea" required/>
            <button type="button" onClick={nuevaLlave} className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={nombreTarea ? "" : "disabled"}>
              Agregar Tarea
            </button>
          </div>                                
          
            {
              
              listaTarea.map(Tarea=>(
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
      
      <div>

      
    </div>

    </div>

  );
}
