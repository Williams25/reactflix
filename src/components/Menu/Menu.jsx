import React from 'react'
import './menu.css'
import Logo from '../../assets/img/Logo.png'
import ButtonLink from '../Button/ButtonLink'

export default props => {

  return (
    <nav className="Menu">
      <ButtonLink to="/">
        <img className="Logo" src={Logo} alt="" />
      </ButtonLink>

      <ButtonLink className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </ButtonLink>
    </nav>
  )
}