// import React from 'react'
import PropTypes from 'prop-types'

function Heading({title,subtitle}) {
    return (
      <div className='space-y-4 text-center '>
          <h1 className='font-bold text-xl lg:text-5xl px-14 lg:px-36'>{title}</h1>
          <p className='text-xs lg:text-lg font-extralight px-16 lg:px-96 opacity-80'>{subtitle}</p>
      </div>
    )
  }

Heading.propTypes = {
    title:PropTypes.string,
    subtitle:PropTypes.string,
}

export default Heading
