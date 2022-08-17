import React from 'react'

const Answer = () => {
  const handleTrue = () => {

  }
  const handleFalse = () => {

  }
  return (
    <div className='btn-container'>
      <button className='btn' onClick={handleTrue}>True</button>
      <button className='btn' onClick={handleFalse}>False</button>
    </div>
  )
}

export default Answer