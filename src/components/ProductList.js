import React, { useState, useEffect } from 'react';

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
      const data = await response.json();
      setProdutos(data.products);
    }

    fetchProdutos();
   
  }, []);

  return (
    <div>
        {produtos.map((produto) => (
        <div key={produto.id}>
          <img src={produto.photo} alt={produto.nome} />
          <p>{produto.productName}</p>
          <p>{produto.price}</p>
          <p>ou 2x de R${produto.price / 2} sem juros</p>
        </div>
      ))}
    </div>
  );
}

export default ListaProdutos;
