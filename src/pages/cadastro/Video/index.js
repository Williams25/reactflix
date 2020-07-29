import React from 'react'
import PageDefault from '../../../components/PageDefault'
import ButtonLink from '../../../components/Button/ButtonLink'

export default props => {

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>
      
      <ButtonLink to="/cadastro/categoria">
        Cadastrar Categoria
      </ButtonLink>
    </PageDefault>
  )
}