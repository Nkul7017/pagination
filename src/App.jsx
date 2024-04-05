import React, { useEffect, useState } from 'react'

function App() {
const [data,setData]=useState([]);
const [page,setPage]=useState(0);
const get=async()=>{
  try {
    const res=await fetch('https://jsonplaceholder.typicode.com/photos',{
      method:'GET'
    })
    const a=await res.json();
    console.log(a);
    setData(a.slice(0,24));
  } catch (e) {
  }
}
  useEffect(()=>{
   get()
  },[]
  )
  function handlePrev()
  {
     console.log(page);
     if(page>0)
     {
      setPage(page-1);
     }
     else console.log("ni hoga")
  }
  function handleNext()
  {
    if(page*5+5<data.length)
    setPage(page+1);
  }
  return (
   <>
   <div>
   <div className=' flex gap-2 p-3 h-[400px] max-w-[100vw] overflow-x-scroll  border border-black '>
  {data?.slice(page*5,page*5+5)?.map((value,i)=>
  <>
  <div className=' min-w-[300px] h-[100%] bg-red-500 '>
   <img src={value?.url} className='h-[80%]' alt="" />
   <p>{value?.id},{value?.title}</p>
  </div>
  </>
  )}
  </div>

  <div className=' flex mt-5 justify-center'>
    <div className=' flex gap-2'>
    <button id="prevButton" disabled={page===0} onClick={handlePrev} className='  bg-blue-500 rounded-md text-white py-1 px-1'>Prev</button>
    {[...Array(Math.ceil(data?.length/5))]?.map((v,i)=>
    <button className={`${page==i&&" bg-gray-500 font-bold text-white "} p-1` } onClick={()=>{setPage(i) }}>{i+1}</button>
    )}
    <button id="nextButton" disabled={(page)*5+5>data.length} onClick={handleNext} className=' bg-blue-500 rounded-md text-white py-1 px-1'>Next</button>
    </div>
  </div>
  </div>
   </>
  )
}

export default App
