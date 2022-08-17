import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { dataAtom } from '../Store'
import Answer from './Answer'
import Question from './Question'

const Quiz = () => {
  const [data, setData] = useAtom(dataAtom)

  // API CALL TO QUIZ
  const quizURL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
  const apiCall = async () => {
    const response = await fetch(quizURL)
    const result = await response.json()
    setData(result?.results)
  }

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <>
    <div className='container'>
      <Question />
      <Answer />
    </div>
    </>
  )
}

export default Quiz