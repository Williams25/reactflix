import React from 'react'
import Menu from '../Menu/Menu'
import Footer from '../Footer'
import styled from 'styled-components'

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5% 50px 5%
`

export default props => {

  return (
    <>
      <Menu />
        <Main>
          {props.children}
        </Main>
      <Footer />
    </>
  )
}