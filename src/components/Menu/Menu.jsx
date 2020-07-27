import React from 'react'
import './menu.css'
import Logo from '../../assets/img/Logo.png'
import ButtonLink from '../Button/ButtonLink'

export default props => {

  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="" />
      </a>

      <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>
    </nav>
  )
}