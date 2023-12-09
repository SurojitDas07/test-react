import React from 'react'
import Firstbox from './firstbox'
const Section = () => {
  return (
    <div className='section'>
        <h1 className='text'>Care early <br />Coronavirus </h1>
        <div className='sBtn'>
        <button className='btn1 red'>Read more</button>
        <button className='btn1 white'>About us</button></div>
        <Firstbox/>
    </div>
  )
}

export default Section