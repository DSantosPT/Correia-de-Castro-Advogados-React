import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <div className="header-container">
        <Link to="/" className="header-navlink">
          <h1 className="header-heading">{props.heading1}</h1>
        </Link>
        <div className="header-container1">
          <Link to="/" className="header-text">
            <span className="">Início</span>
          </Link>
          <Link to="/quemsomos" className="header-text2">
            <span className="">Quem somos</span>
          </Link>
          <Link to="/servicos" className="header-navlink1">
            <span className="">Serviços</span>
          </Link>
          <Link to="/contactos" className="header-navlink2">
            {props.link3}
          </Link>
        </div>
      </div>
      <div data-type="BurgerMenu" className="header-burger-menu">
        <svg viewBox="0 0 1024 1024" className="header-icon">
          <path
            d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
            className=""
          ></path>
        </svg>
      </div>
      <div data-type="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink3">
            <h1 className="header-heading1 textSM">{props.heading11}</h1>
          </Link>
          <div data-type="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon02">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <Link to="/quemsomos" className="header-navlink4">
            <div className="header-container2">
              <svg viewBox="0 0 1024 1024" className="header-icon04">
                <path
                  d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                  className=""
                ></path>
              </svg>
              <span className="header-text5 textSM">{props.link1}</span>
            </div>
          </Link>
          <Link to="/contactos" className="header-navlink5">
            <div className="header-container3">
              <svg viewBox="0 0 1024 1024" className="header-icon06">
                <path
                  d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"
                  className=""
                ></path>
                <path
                  d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"
                  className=""
                ></path>
                <path
                  d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"
                  className=""
                ></path>
                <path
                  d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"
                  className=""
                ></path>
              </svg>
              <span className="header-text6 textSM">{props.link3}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
  heading11: 'Correia de Castro Advogados',
  link2: 'Serviços',
  heading1: 'Correia de Castro Advogados',
  link3: 'Contactos',
  link1: 'Quem somos',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  heading11: PropTypes.string,
  link2: PropTypes.string,
  heading1: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
}

export default Header
