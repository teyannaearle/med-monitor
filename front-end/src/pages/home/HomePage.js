import React from 'react'
import Intro from '../../components/home/Intro'
import SignInForm from '../../components/home/SignInForm'
import './HomePage.scss'

function HomePage() {
  return (
    <div className='homePage'>
      <div className='homePage__main'>
        <h1>Med&middot;Monitor</h1>
        <div> 
          <Intro />
          <SignInForm />
        </div>
      </div>
    </div>
  )
}

export default HomePage