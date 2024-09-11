import React from 'react'
import './LeftAlignedParagraph.css'

const LeftAlignedParagraph = ({subTtitle, text}) => {
  return (
    <div className='LeftAlignedParagraph'>
      <h2>{subTtitle}</h2>
      <p>{text}</p>
    </div>
  )
}

export default LeftAlignedParagraph
