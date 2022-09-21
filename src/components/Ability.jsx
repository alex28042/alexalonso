import React from 'react'

const Ability = (props) => {
  console.log(props.img)
  return (
    <div className='flex flex-col ml-7 mt-5 items-center'>
        <div className=' bg-slate-500 rounded-lg h-20 w-20 items-center justify-center opacity-10'>
          {props.img !== null ? 
            <>
              <img src={props.img} className="h-10 w-10" />
            </>
          :
            <>
            
            </>
          }
        </div>
        <h1 className='mt-1'>{props.name}</h1>
    </div>
  )
}

export default Ability