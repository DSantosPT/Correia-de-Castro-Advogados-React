import React from 'react'

import PropTypes from 'prop-types'

import Header from './header'
import './hero.css'

const Hero = (props) => {
  return (
    <div className={`hero-hero ${props.rootClassName} `}>
      <Header rootClassName="header-root-class-name" className=""></Header>
      <div className="hero-container">
        <h1 className="hero-text text2XL">{props.heading}</h1>
      </div>
      <div className="hero-bg"></div>
    </div>
  )
}

Hero.defaultProps = {
  rootClassName: '',
  heading: 'Page Title',
}

Hero.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default Hero
