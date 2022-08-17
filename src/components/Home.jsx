import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <h1>Welcome to Trivia Challenge</h1>
      <h2>You will be presented with 10 True or False Questions</h2>
      <h2>Can you score 100%</h2>
      <Link className='btn' to='/quiz'>Begin</Link>
    </div>
  )
}

export default Home