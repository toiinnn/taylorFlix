import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"The lead single from Folklore, Cardigan"}
      />

      {
        dadosIniciais.categorias.map((categoria, index) => (
          index === 1? 
            <Carousel 
              ignoreFirstVideo
              category={categoria}
            /> :            
            <Carousel 
              category={categoria}
            />
        ))
      }

      <Footer />

    </div>
  );
}

export default Home;

