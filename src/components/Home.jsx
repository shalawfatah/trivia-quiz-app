import { useAtom } from 'jotai';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { markAtom, questionNumberAtom, resultAtom } from '../Store';

const Home = () => {
  const [questionNumber, setQuestionNumber] = useAtom(questionNumberAtom)
  const [mark, setMark] = useAtom(markAtom)
  const [result, setResult] = useAtom(resultAtom)
  
  // WHEN USER STARTS, OR RETURNS, SET THE GAME CREDENTIALS ANEW
  useEffect(() => {
    setQuestionNumber(0)
    setMark(0)
    setResult(false)
  }, [])
  
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