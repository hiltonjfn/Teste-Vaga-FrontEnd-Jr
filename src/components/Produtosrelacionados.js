import React from 'react'
import './css/Produtosrelacionados.scss'

const Produtosrelacionados = (props) => {
    return (
        <div className='Produtos_relacionados_Css'>
           <hr /><h1>Produtos relacionados</h1><hr />

            {props.barra === true?(<div className='caixa_relacionados'>
            <div >
                <a  className='caixa_relacionadosSelect' href="/#">celular</a>
            </div>
            <div>
                <a className='caixa_relacionadosNoSelect' href="/#">acessórios</a>
            </div>
            <div>
                <a  className='caixa_relacionadosNoSelect' href="/#">tablets</a>
            </div>
            <div>
                <a className='caixa_relacionadosNoSelect' href="/#">NOTEBOOKS</a>
            </div>
            <div>
                <a className='caixa_relacionadosNoSelect' href="/#">TVs</a>
            </div>
            <div>
                <a className='caixa_relacionadosNoSelect' href="/#">Ver todos</a>
            </div>
            

           </div>):(<h2 className='VerTodos'>Ver todos</h2>)}
           
        </div>
    )
}

export default Produtosrelacionados