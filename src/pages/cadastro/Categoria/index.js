import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import ButtonLink from '../../../components/Button/ButtonLink'
import FormField from '../../../components/FormField'
import ButtonStyled from '../../../components/Button/ButtonStyled'

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

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias'
    fetch(URL).then(async (response) => {
      if (response.ok) {
        const resposta = await response.json()
        setCategorias([...resposta])
        return
      }
    }).catch(err => console.log(err))
  },[])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form onSubmit={submit}>

        <FormField
          as="text"
          label="Nome"
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <FormField
          as="textarea"
          label="Descrição"
          type="textarea"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />

        <FormField
          as="input"
          label="Cor"
          type="color"
          value={cor}
          onChange={e => setCor(e.target.value)}
        />

        <ButtonStyled
          onClick={
            () => insereCategorias({ nome, descricao, cor })
          }>
          Cadastrar
        </ButtonStyled>
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