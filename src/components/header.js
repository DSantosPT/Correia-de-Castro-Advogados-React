import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <div className="header-container">
        <Link to="/" className="header-navlink">
          <h1 className="header-heading textSM">{props.heading1}</h1>
        </Link>
        <div className="header-container1">
          <Link to="/" className="header-navlink1">
            <div className="header-container2">
              <svg viewBox="0 0 950.8571428571428 1024" className="header-icon">
                <path
                  d="M804.571 566.857v274.286c0 20-16.571 36.571-36.571 36.571h-219.429v-219.429h-146.286v219.429h-219.429c-20 0-36.571-16.571-36.571-36.571v-274.286c0-1.143 0.571-2.286 0.571-3.429l328.571-270.857 328.571 270.857c0.571 1.143 0.571 2.286 0.571 3.429zM932 527.429l-35.429 42.286c-2.857 3.429-7.429 5.714-12 6.286h-1.714c-4.571 0-8.571-1.143-12-4l-395.429-329.714-395.429 329.714c-4 2.857-8.571 4.571-13.714 4-4.571-0.571-9.143-2.857-12-6.286l-35.429-42.286c-6.286-7.429-5.143-19.429 2.286-25.714l410.857-342.286c24-20 62.857-20 86.857 0l139.429 116.571v-111.429c0-10.286 8-18.286 18.286-18.286h109.714c10.286 0 18.286 8 18.286 18.286v233.143l125.143 104c7.429 6.286 8.571 18.286 2.286 25.714z"
                  className=""
                ></path>
              </svg>
              <span className="header-text textSM">
                <span className="">Início</span>
              </span>
            </div>
          </Link>
          <Link to="/quemsomos" className="header-navlink2">
            <div className="header-container3">
              <svg viewBox="0 0 1152 1024" className="header-icon02">
                <path
                  d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                  className=""
                ></path>
                <path
                  d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"
                  className=""
                ></path>
              </svg>
              <span className="header-text2 textSM">
                <span className="">Quem somos</span>
              </span>
            </div>
          </Link>
          <Link to="/servicos" className="header-navlink3">
            <div className="header-container4">
              <svg
                viewBox="0 0 1243.4285714285713 1024"
                className="header-icon05"
              >
                <path
                  d="M987.429 256l-219.429 402.286h438.857zM256 256l-219.429 402.286h438.857zM725.143 146.286c-10.857 30.857-36 56-66.857 66.857v737.714h347.429c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-768c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h347.429v-737.714c-30.857-10.857-56-36-66.857-66.857h-280.571c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h280.571c15.429-42.857 55.429-73.143 103.429-73.143s88 30.286 103.429 73.143h280.571c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-280.571zM621.714 155.429c25.143 0 45.714-20.571 45.714-45.714s-20.571-45.714-45.714-45.714-45.714 20.571-45.714 45.714 20.571 45.714 45.714 45.714zM1243.429 658.286c0 117.714-162.857 164.571-256 164.571s-256-46.857-256-164.571v0c0-22.286 199.429-375.429 224-420 6.286-11.429 18.857-18.857 32-18.857s25.714 7.429 32 18.857c24.571 44.571 224 397.714 224 420v0zM512 658.286c0 117.714-162.857 164.571-256 164.571s-256-46.857-256-164.571v0c0-22.286 199.429-375.429 224-420 6.286-11.429 18.857-18.857 32-18.857s25.714 7.429 32 18.857c24.571 44.571 224 397.714 224 420z"
                  className=""
                ></path>
              </svg>
              <span className="header-text4 textSM">
                <span className="">Serviços</span>
              </span>
            </div>
          </Link>
          <Link to="/contactos" className="header-navlink4">
            <div className="header-container5">
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="header-icon07"
              >
                <path
                  d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"
                  className=""
                ></path>
              </svg>
              <span className="header-text6 textSM">{props.link3}</span>
            </div>
          </Link>
        </div>
      </div>
      <div data-type="BurgerMenu" className="header-burger-menu">
        <svg viewBox="0 0 1024 1024" className="header-icon09">
          <path
            d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
            className=""
          ></path>
        </svg>
      </div>
      <div data-type="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink5">
            <h1 className="header-heading1 textSM">{props.heading11}</h1>
          </Link>
          <div data-type="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon11">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <Link to="/quemsomos" className="header-navlink6">
            <div className="header-container6">
              <svg viewBox="0 0 1024 1024" className="header-icon13">
                <path
                  d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                  className=""
                ></path>
              </svg>
              <span className="header-text7 textSM">{props.link1}</span>
            </div>
          </Link>
          <Link to="/contactos" className="header-navlink7">
            <div className="header-container7">
              <svg viewBox="0 0 1024 1024" className="header-icon15">
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
              <span className="header-text8 textSM">{props.link3}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
  heading1: 'Correia de Castro Advogados',
  link3: 'Contactos',
  link1: 'Quem somos',
  link2: 'Serviços',
  heading11: 'Correia de Castro Advogados',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  heading11: PropTypes.string,
}

export default Header
