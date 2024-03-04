import React, { Fragment } from 'react'
import Videoo from '../../assets/Video/EgyTourism.mp4'

const Video = () => {
  return (
    <Fragment>
    <div className='video'>

              <video src={Videoo} controls  autoPlay>watch video</video>
    </div>
    </Fragment>
  )
}

export default Video
