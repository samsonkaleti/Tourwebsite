import React, { useState } from 'react'

const Tour = ({ deleteTour, data: { id, name, info, price, image } }) => { 
   
    const [readMore, setReadMore] = useState(false) 

    
  return (
      <div className=' min-h-screen mb-20  border   '>  
         
          <article className="h-screen mx-2 w-96 p-2 flex flex-col justify-between  border rounded-xl shadow-lg ">
             
              <img src={image} alt="poster" className='min-w-72 h-56' />    
              <span>{price}</span>
              
              <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{name}</h3>
                  <p className="text-sm">{readMore ? info : `${info.substring(0, 250)}`}
                      <br />
                    <button onClick={()=>{setReadMore(!readMore)}} className='text-green-400 ' type='button'>{readMore ? `Show Less` : `Read More ...`} </button>
                  
                  </p>
                  <p className="text-sm font-bold mt-2">${price}
                  
                  
                  </p>
              </div> 
              <button className='p-2 m-2 bg-red-500 text-white' onClick={()=>deleteTour(id)}>Delete</button> 

          </article> 
    </div>
  )
}

export default Tour
