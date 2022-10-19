import React, { useContext } from 'react'
import './Square.style.scss'
import Amir from '../../image/Amir.jpeg'
import Navigation from '../navigation/Navigation.component'
import { AllContext } from '../../context/AllContext'
import Title from '../title/Title.component'
const Square = () => {
  const {showModal , windowSize} = useContext(AllContext)

  return (  
    <div className='square-container'>
      <div className='first-square' style={showModal ? {animation:'1s fullscreen forwards',animationDelay: '1s'}:null}>
        <div className='profile-image-container'>
          <img className='profile-image' src={Amir} alt='Amir Mabood'/>
          {showModal?<div className='first-square2'></div>:''}
        </div>
        { windowSize>=769 ? <Navigation /> : null}
        { windowSize>=769 ? <Title /> : null}
      </div>
    </div>
  )
}

export default Square