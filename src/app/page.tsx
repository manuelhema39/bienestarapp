'use client'
import Link from "next/link"
import CasillaVerificacion from "./componentes/Casilla";
import React, { useState, useEffect } from 'react';

const misTareas=[];

export default function Home() {

  const [Tarea, setTarea] = useState();
  const [count,setCount]=useState(0)
  const miInput=document.getElementById("InputTarea");

    useEffect(() => {
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
            divTareas?.appendChild(divContenedorNombreTarea);
            miInput.value="";
           /* const li=document.createElement('li');
            const li1=document.createElement('li');
            li.className="miLi flex space-x-3 items-center";
            let textNode=document.createTextNode(miInput.value);
            li.appendChild(textNode)
            const casillaVerificacion=document.createElement('input');
            casillaVerificacion.type="checkbox";
            casillaVerificacion.className="appearance-none checked:bg-blue-500 ...";
            li1.appendChild(casillaVerificacion);
            Lista.appendChild(li);
            Lista.appendChild(li1);
            miInput.value=""*/
        }
    });

  return (
    <div className="centrar">
      <div className="">
        <h1 className="font-bold uppercase ...">Listas de Tareas</h1>
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative">
            <input type="text" id="InputTarea" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nueva Tarea" required/>
            <button className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"  onClick={() =>{
              setCount(count + 1) 
              setTarea({"Tarea":count});
              miInput ?   misTareas.push([{"Tarea":count,"Descripcion":miInput.value}]) : console.log("Error");
            }}>
            Agregar Tarea
            </button>
          </div>                                
          <div id="contenedorTareas" className="grid grid-cols-2 gap-1">
          </div>
        </div>
      </div>
    </div>

  );
}
