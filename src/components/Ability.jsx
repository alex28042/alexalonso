import React from 'react'

const Ability = (props) => {
  return (
    <div className='flex flex-col ml-7 mt-5 items-center'>
        <div className='bg-white rounded-lg h-20 w-20 opacity-10'>

        </div>
        <h1 className='mt-1'>{props.name}</h1>
    </div>
  )
}

export default Ability