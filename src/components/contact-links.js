import React from 'react'

import PropTypes from 'prop-types'

import './contact-links.css'

const ContactLinks = (props) => {
  return (
    <div className={`contact-links-container ${props.rootClassName} `}>
      <a
        href="https://goo.gl/maps/9aq4Q6CZq24V9qPaA"
        target="_blank"
        rel="noreferrer noopener"
        className="contact-links-link"
      >
        <div className="contact-links-localizao">
          <svg
            viewBox="0 0 585.1428571428571 1024"
            className="contact-links-icon"
          >
            <path
              d="M438.857 365.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM585.143 365.714c0 34.857-4 70.857-18.857 102.286l-208 442.286c-12 25.143-38.286 40.571-65.714 40.571s-53.714-15.429-65.143-40.571l-208.571-442.286c-14.857-31.429-18.857-67.429-18.857-102.286 0-161.714 130.857-292.571 292.571-292.571s292.571 130.857 292.571 292.571z"
              className=""
            ></path>
          </svg>
          <h1 className="contact-links-text TextMD">
            <span className="">
              Avenida da República 740º, 2º piso - sala 21,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="">
              4430-190 Vila Nova de Gaia
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h1>
        </div>
      </a>
      <div className="contact-links-horrio">
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="contact-links-icon02"
        >
          <path
            d="M512 310.857v256c0 10.286-8 18.286-18.286 18.286h-182.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h128v-201.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
            className=""
          ></path>
        </svg>
        <h1 className="contact-links-text03 TextMD">
          <span className="">
            Segunda a sexta:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="">09:30 às 19:00</span>
        </h1>
      </div>
      <a href="tel:+351910773626" className="contact-links-link1">
        <div className="contact-links-telemvel">
          <svg
            viewBox="0 0 438.85714285714283 1024"
            className="contact-links-icon04"
          >
            <path
              d="M265.143 804.571c0-25.143-20.571-45.714-45.714-45.714s-45.714 20.571-45.714 45.714 20.571 45.714 45.714 45.714 45.714-20.571 45.714-45.714zM384 713.143v-402.286c0-9.714-8.571-18.286-18.286-18.286h-292.571c-9.714 0-18.286 8.571-18.286 18.286v402.286c0 9.714 8.571 18.286 18.286 18.286h292.571c9.714 0 18.286-8.571 18.286-18.286zM274.286 228.571c0-5.143-4-9.143-9.143-9.143h-91.429c-5.143 0-9.143 4-9.143 9.143s4 9.143 9.143 9.143h91.429c5.143 0 9.143-4 9.143-9.143zM438.857 219.429v585.143c0 40-33.143 73.143-73.143 73.143h-292.571c-40 0-73.143-33.143-73.143-73.143v-585.143c0-40 33.143-73.143 73.143-73.143h292.571c40 0 73.143 33.143 73.143 73.143z"
              className=""
            ></path>
          </svg>
          <h1 className="contact-links-text06 TextMD">+351 910 773 626</h1>
          <h1 className="contact-links-text07 TextMD">
            <span className="">(chamada para a rede móvel nacional)</span>
            <br className=""></br>
          </h1>
        </div>
      </a>
      <a href="tel:+351223753769" className="contact-links-link2">
        <div className="contact-links-telefone">
          <svg
            viewBox="0 0 804.5714285714286 1024"
            className="contact-links-icon06"
          >
            <path
              d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"
              className=""
            ></path>
          </svg>
          <h1 className="contact-links-text10 TextMD">+351 223 753 769</h1>
          <h1 className="contact-links-text11 TextMD">
            <span className="">(chamada para a rede fixa nacional)</span>
            <br className=""></br>
          </h1>
        </div>
      </a>
      <a
        href="mailto:Correia de Castro Advogados &lt;correiadecastroadvogados@gmail.com&gt;?subject=Contacto Website"
        className="contact-links-link3"
      >
        <div className="contact-links-email">
          <svg viewBox="0 0 1024 1024" className="contact-links-icon08">
            <path
              d="M950.857 859.429v-438.857c-12 13.714-25.143 26.286-39.429 37.714-81.714 62.857-164 126.857-243.429 193.143-42.857 36-96 80-155.429 80h-1.143c-59.429 0-112.571-44-155.429-80-79.429-66.286-161.714-130.286-243.429-193.143-14.286-11.429-27.429-24-39.429-37.714v438.857c0 9.714 8.571 18.286 18.286 18.286h841.143c9.714 0 18.286-8.571 18.286-18.286zM950.857 258.857c0-14.286 3.429-39.429-18.286-39.429h-841.143c-9.714 0-18.286 8.571-18.286 18.286 0 65.143 32.571 121.714 84 162.286 76.571 60 153.143 120.571 229.143 181.143 30.286 24.571 85.143 77.143 125.143 77.143h1.143c40 0 94.857-52.571 125.143-77.143 76-60.571 152.571-121.143 229.143-181.143 37.143-29.143 84-92.571 84-141.143zM1024 237.714v621.714c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-621.714c0-50.286 41.143-91.429 91.429-91.429h841.143c50.286 0 91.429 41.143 91.429 91.429z"
              className=""
            ></path>
          </svg>
          <h1 className="contact-links-text14 TextMD">
            correiadecastroadvogados@gmail.com
          </h1>
        </div>
      </a>
    </div>
  )
}

ContactLinks.defaultProps = {
  rootClassName: '',
}

ContactLinks.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContactLinks
