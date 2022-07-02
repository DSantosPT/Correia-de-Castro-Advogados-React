import React from 'react'

import PropTypes from 'prop-types'

import './map.css'

const Map = (props) => {
  return (
    <div
      id="map"
      data-lat="41.010035618871754"
      data-lng="-8.641739259541081"
      data-type="Map"
      className={`map-map ${props.rootClassName} `}
    >
      <iframe
        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Avenida%20da%20R%C3%A9publica%20740%C2%BA,%202%C2%BA-s%2021,%204430-190%20Vila%20nova%20de%20Gaia%20+(Correia%20de%20Castro%20Advogados)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        className="map-iframe"
      ></iframe>
    </div>
  )
}

Map.defaultProps = {
  initMap: () => {},
  rootClassName: '',
}

Map.propTypes = {
  initMap: PropTypes.func,
  rootClassName: PropTypes.string,
}

export default Map
