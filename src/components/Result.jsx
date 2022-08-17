import { useAtom } from 'jotai'
import React from 'react'
import { dataAtom, markAtom } from '../Store'
import {Link} from 'react-router-dom'

const Result = () => {
  // DATA FOR RESULT OF THE GAME
  const [data, setData] = useAtom(dataAtom)
  const [mark, setMark] = useAtom(markAtom)

  return (
    <div className='container'>
      <h1>You scored {mark} / {data?.length}</h1>
      {(mark > data?.length / 2) ? <h1>Congratulations!</h1> : <h1>Sorry, better luck next time!</h1> }
      <Link className='btn' to='/'>Play Again</Link>
    </div>
  )
}

export default Result