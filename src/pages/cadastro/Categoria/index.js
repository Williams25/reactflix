import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import ButtonLink from '../../../components/Button/ButtonLink'
import FormField from '../../../components/FormField'
import FormTextArea from '../../../components/FormField/FormTextArea'

export default props => {
  const [nome, setNome] = useState()
  const [cor, setCor] = useState('')
  const [descricao, setDescricao] = useState()
  const [categorias, setCategorias] = useState([])

  const submit = e => e.preventDefault()

  const insereCategorias = (values) => {
    setCategorias([
      ...categorias,
      values
    ])
  }

  const listaCategorias = categorias.map((categoria, index) => {
    return (
      <li key={index}>
        {categoria.nome} - {categoria.descricao} - {categoria.cor}
      </li>
    )
  })

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={submit}>

        <FormField
          label="Nome: "
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <FormTextArea
          label="Descrição: "
          type="text"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />

        <FormField
          label="Cor: "
          type="color"
          value={cor}
          onChange={e => setCor(e.target.value)}
        />

        <button type="button" onClick={() => insereCategorias({ nome, descricao, cor })}>Cadastrar</button>
      </form>

      <ul>
        {listaCategorias}
      </ul>

      <ButtonLink to="/">
        Página inicial
      </ButtonLink>
    </PageDefault>
  )
}