import { useAtom } from 'jotai'
import React from 'react'
import { dataAtom, questionNumberAtom } from '../Store'
import '../styles/Quiz.css'


const Question = () => {
  const [data, setData] = useAtom(dataAtom)
  const [questionNumber, setQuestionNumber] = useAtom(questionNumberAtom)

  return (
    <h1 className='question' dangerouslySetInnerHTML={{__html: data[questionNumber]?.question}}></h1>
  )
}

export default Question