import './App.css';
import Banners from './components/Banners';
import Header from './components/Header';
import Frame881 from './components/Frame881';
import Produtosrelacionados from './components/Produtosrelacionados'
import AdvancedCarousel from './components/AdvancedCarousel'
import Marcas from './components/Marcas';
import Footer from './components/Footer';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Frame881/>
      <Produtosrelacionados barra={true}/>
      <AdvancedCarousel/>
      <Banners/>
      <Produtosrelacionados/>
      <AdvancedCarousel/>
      <Banners conteiner={true}/>
      <Marcas/>
      <Produtosrelacionados/>
      <AdvancedCarousel/>
      <br />
      
      </main>
      <footer>
      <Footer/>
      </footer>
      
      
      
      
    </div>
  );
}

export default App;
