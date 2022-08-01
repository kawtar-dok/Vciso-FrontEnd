import React from 'react'
import './Cover.css'
import cover from '../assets/img/cover.jpg';

function Cover() {
  return (
    <div className="Cover">
      <div className='Cover__background'>
        <img
        alt='..'
        className='Cover__background__image'
        src={cover}

        />
      </div>
    </div>
  )
}

export default Cover