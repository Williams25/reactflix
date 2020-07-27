import React from 'react'
import Menu from './components/Menu/Menu'
import BannerMain from './components/BannerMain'
import Dados from './components/data/dados_iniciais.json'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App" style={{ background: '#141414' }}>
      <Menu />

      <BannerMain videoTitle={Dados.categorias[0].videos[0].titulo}
        url={Dados.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"} />

      <Carousel
        ignoreFirstVideo
        category={Dados.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={Dados.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={Dados.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={Dados.categorias[3]}
      />

      <Footer />
    </div>
  );
}

export default App;
