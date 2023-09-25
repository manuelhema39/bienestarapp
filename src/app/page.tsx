'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

export default function Home() {

  const listaTareas=[];

  const agregaTarea=()=>{
    let selInput=document.getElementById("first_name");
    if(selInput!==null){
      listaTareas.push({"id":listaTareas.length,"Tarea":selInput.value});
      console.log(listaTareas)
      const Lista=document.getElementById("ListaTareas");
      Lista.className="list-none md:list-disc";
      const claves=Object.keys(listaTareas);
      const li=document.createElement('li');

      const p=document.createElement('p');
      p.appendChild(document.createTextNode(selInput.value));
      Lista.appendChild(li).appendChild(p);

    }
    else{
      console.log("No hay tarea que agregar..")
    }
  }
 
  return (

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div className='flex flex-row'>
          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriba la tarea" required/>
          <button type="button" onClick={agregaTarea} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar Tarea</button>
        </div>
        <div className='flex flex-row'>
          <ul id="ListaTareas">

          </ul>
        </div>
      </div>
 
  )
}
