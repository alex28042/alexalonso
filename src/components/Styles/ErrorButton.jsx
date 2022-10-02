import React from 'react'

const ErrorButton = (props) => {
  return (
    <div className='fixed bottom-0 items-center justify-center w-full h-10'>
        {props.msg}
    </div>
  )
}

export default ErrorButton