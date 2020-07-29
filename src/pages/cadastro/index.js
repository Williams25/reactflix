import React from 'react'
import PageDefault from '../../components/PageDefault'
import ButtonLink from '../../components/Button/ButtonLink'

export default props => {

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form>
        <label>
          Nome categoria
        </label>
        <input type="text" />
        <button type="button">Cadastrar</button>
      </form>
      <ButtonLink to="/">
        Página inicial
      </ButtonLink>
    </PageDefault>
  )
}