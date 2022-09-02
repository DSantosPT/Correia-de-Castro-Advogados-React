import React from 'react'

import PropTypes from 'prop-types'

import './team-element.css'

const TeamElement = (props) => {
  return (
    <div className={`team-element-container ${props.rootClassName} `}>
      <img alt="image" src={props.Imagem} className="team-element-image" />
      <div className="team-element-container1 card-content">
        <h3 className="team-element-text text2XL">{props.Nome}</h3>
        {props.children}
      </div>
    </div>
  )
}

TeamElement.defaultProps = {
  rootClassName: '',
  Nome: 'Nome Apelido',
  Imagem: '/playground_assets/team2-400h.jpg',
}

TeamElement.propTypes = {
  rootClassName: PropTypes.string,
  Nome: PropTypes.string,
  Imagem: PropTypes.string,
}

export default TeamElement
