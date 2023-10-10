'use client'
import React, { useState } from 'react'
  
const page = () => {
  const [title, settitle] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submithendle = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title}])
    settitle("")
  }
  const deleteHendle = (i)=>{
    let copytask = [...mainTask]
      copytask.splice(i,1)
      setmainTask(copytask)
  }
  let Task = <h1> No Task Available</h1>
   
      if(mainTask.length>0){
        Task =  mainTask.map((t,i)=>{
          return (
            <div className='flex justify-between items-center'>
           <div className='flex items-center'>
           <input type='checkBox' className='w-8 h-8 mr-2' />
            <h1>{t.title}</h1>
           </div>
            <button className=' text-white ml-1 font-bold border-2 bg-slate-400 rounded-xl  py-2 px-3'
             onClick={()=>{
              deleteHendle(i)
             }}>delete</button>
          </div>)
        })
      }
      
  return (
    <>
    <h1 className='bg-black text-center text-2xl font-bold text-white p-5 mb-10'>My TO-Do List</h1>
    <div className='flex flex-col items-center justify-center m-auto p-2'>
      <form onSubmit={submithendle}>
        <input
        className='p-2 mt-2 text-gray-800 border-2 rounded w-3/5 mr-5 '
        type='text'
        placeholder='Enter your title'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />
        <button className=' text-white ml-1 font-bold  border-2 rounded-xl  py-2 bg-slate-400 px-5'>Add</button>
      </form>
      <div className='p-5 mb-8 bg-slate-300 text-left w-full mt-8'>
        <ul>{Task}
        </ul>
      </div>
    </div>
    
    </>
    
  )
}

export default page
