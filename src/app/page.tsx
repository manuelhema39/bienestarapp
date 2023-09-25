'use client'
import Link from "next/link"
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
           
            const li=document.createElement('li');
            li.className="miLi flex space-x-3 items-center";
            let textNode=document.createTextNode(miInput.value);
            li.appendChild(textNode)
            Lista.appendChild(li)
            miInput.value=""
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

          <div className="relative">
            <ul role="list" className="my-7" id="ListaTareas">
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}
