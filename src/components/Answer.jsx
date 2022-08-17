import { useAtom } from 'jotai'
import React from 'react'
import { dataAtom, markAtom, questionNumberAtom, resultAtom } from '../Store'
import { Navigate } from 'react-router-dom'

const Answer = () => {
  // DATA NEEDED TO HANDLE CORRECT ANSWERS
  const [data, setData] = useAtom(dataAtom)
  const [questionNumber, setQuestionNumber] = useAtom(questionNumberAtom)
  const [mark, setMark] = useAtom(markAtom)
  const [result, setResult] = useAtom(resultAtom)

  // WHEN USER CLICKS TRUE
  const handleTrue = () => {
    data[questionNumber]?.correct_answer == "True" && setMark(prev => prev + 1)
    questionNumber < 9 && setQuestionNumber(prev => prev + 1)
    if(questionNumber == 9) {
      data[questionNumber]?.correct_answer == "True" && setMark(prev => prev + 1)
      setResult(true)
    }
  }

  // WHEN USER CLICKS FALSE
  const handleFalse = () => {
    data[questionNumber]?.correct_answer == "False" && setMark(prev => prev + 1)
    questionNumber < 9 && setQuestionNumber(prev => prev + 1)
    if(questionNumber == 9) {
      data[questionNumber]?.correct_answer == "False" && setMark(prev => prev + 1)
      setResult(true)
    }
  }
  return (
    <div className='btn-container'>
      <button className='btn' onClick={handleTrue}>True</button>
      <button className='btn' onClick={handleFalse}>False</button>
      {result == true && <Navigate to='/result' />}
    </div>
  )
}

export default Answer