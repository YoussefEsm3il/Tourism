import React, { Fragment } from 'react'
import Slider from './Slider'

const Gallery = () => {
  return (
    <Fragment>
      <div className='all-page'>
        <div className='card-left'>
            <Slider/>
        </div>
        <div className='card-rhite'>
            <h1> Gallery </h1>
        </div>
    </div>
    </Fragment>
  )
}

export default Gallery
