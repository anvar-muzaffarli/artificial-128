import React from 'react'
import './Introduction.css'

import profilImage from '../assets/images/intro.svg'
import Button from './Button'

function Introduction() {
  return (
    <div className='introduction row'>
        <div className="intro-left-side col-12 col-md-6">
            <h6>Next genaretion platform</h6>
            <h2>Artificial intelligence <br /> & Syber security</h2>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

            <div className="button-groups">
                <Button />
                <Button />
            </div>
        </div>

        <div className="intro-right-side col-12 col-md-6">
            <img src={profilImage} alt="" className='profil' />
        </div>
    </div>
  )
}

export default Introduction