import React from 'react'

import PropTypes from 'prop-types'

import './team-element1.css'

const TeamElement1 = (props) => {
  return (
    <div className="team-element1-container">
      <div className="team-element1-container1 card-content">
        <img alt="image" src={props.Imagem} className="team-element1-image" />
        <div className="team-element1-container2">
          <h3 className="team-element1-text text2XL">{props.Nome}</h3>
          <div className="team-element1-container3">
            <svg viewBox="0 0 1024 1024" className="team-element1-icon">
              <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
            </svg>
            <span className="team-element1-text1 textSM">{props.Cargo}</span>
          </div>
          <div className="team-element1-container4">
            <svg
              viewBox="0 0 1097.142857142857 1024"
              className="team-element1-icon2"
            >
              <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
            </svg>
            <span className="team-element1-text2 textSM">{props.Formacao}</span>
          </div>
          <div className="team-element1-row"></div>
          <span className="team-element1-text3">{props.Descricao}</span>
        </div>
      </div>
    </div>
  )
}

TeamElement1.defaultProps = {
  rootClassName: '',
  Imagem: '/playground_assets/team2-1200w.jpg',
  Nome: 'Jenna Stones',
  Descricao:
    'An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.',
  Cargo: 'Solution Manager - Creative Tim Officer',
  Formacao: 'University of Computer Science',
}

TeamElement1.propTypes = {
  rootClassName: PropTypes.string,
  Imagem: PropTypes.string,
  Nome: PropTypes.string,
  Descricao: PropTypes.string,
  Cargo: PropTypes.string,
  Formacao: PropTypes.string,
}

export default TeamElement1
