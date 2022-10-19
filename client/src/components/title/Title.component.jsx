import React, { useContext } from 'react'
import { AllContext } from '../../context/AllContext'
import './Title.style.scss'

const Title = () => {
    const {showModal} = useContext(AllContext)
  return (
    <>
        {!showModal ?     <div className='title-container'>
        <p className='title-text-developer'>DEVELOPER</p>
        <p className='title-text-gamer'>GAMER</p>
        <p className='title-text-freelancer'>FREELANCER</p>
    </div>:null}
    </>
  )
}

export default Title