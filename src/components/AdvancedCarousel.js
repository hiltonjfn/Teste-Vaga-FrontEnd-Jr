import Modal from './Modal';
import './css/Carousel.scss';
import React, { useState, useEffect } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';



const AdvancedCarousel = () => {
  const [produtos, setProdutos] = useState([]);
  const [modalprodutos, setModalProdutos] = useState([]);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
      const data = await response.json();
      setProdutos(data.products);
    }
    fetchProdutos();

  }, []);


  const { scrollRef, next, prev } =
    useSnapCarousel();
  return (
    <>
      <div className='container'>
        {showModal && (
          <Modal>
            <img src={modalprodutos.photo} alt="" />
            <h1>{modalprodutos.productName}</h1>
            <h2>R$ {modalprodutos.price}</h2>
            <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
            <a href="/#">Veja mais detalhes do produto &gt;</a>
            <button onClick={() => setShowModal(false)}>X</button>
          </Modal>
        )}
        <ul
          ref={scrollRef}
          style={{
            display: 'flex',
            overflow: 'hidden',
            scrollSnapType: 'x mandatory',
            padding: '0px'
          }}
        >
          {produtos.map((produto, i) => (
            <div className='container'>
              <div className='card'>
                <img className='imgCard' src={produto.photo} alt="" />
                <p className='TxtCard'>{produto.productName}</p>
                <p className='PrecoCard'>R$ {produto.price}</p>
                <p className='PrecoCardPromo'>R$ {produto.price}</p>
                <p className='parcela'>ou 2x de R$ {produto.price / 2} sem juros</p>
                <p className='frete'>Frete grátis</p>
                <button onClick={() => {
                  setShowModal(true);
                  setModalProdutos(produto);
                }} className='butaoComprar'>Comprar</button>

              </div>


            </div>
          ))}
        </ul>
        <button className='botao e' onClick={() => prev()}></button>
        <button className='botao d' onClick={() => next()}></button>

      </div>



    </>
  );
};

export default AdvancedCarousel;