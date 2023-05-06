import React from 'react'
import './css/Icones.scss'
import Corrida from '../assent/corrida.png'
import Tec from '../assent/Tec.png'
import supermercados from '../assent/supermercados 1.png'
import whiskey from '../assent/whiskey.png'
import ferramentas from '../assent/ferramentas.png'
import cuidados from '../assent/cuidados.png'
import moda from '../assent/moda.png'


const Frame881 = () => {
  return (
    <div className='Frame881'>
      <div>
        <div className='Icones boxSelecionada'>
          <a className=' Rectangle212B' href="/#"><img className='Rectangle212' src={Tec} alt="" /></a>
        </div>
        <a className='IconeNome iconeselecionado' href="/#">Tecnologia</a>
      </div>
      <div>
        <div className='Icones'>
          <a className='Rectangle212B' href="/#"><img className='Rectangle212' src={supermercados} alt="" /></a>
        </div>
        <a className='IconeNome' href="/#">Supermercado</a>
      </div>
      <div>
        <div className='Icones'>
          <a className='Rectangle212B' href="/#"><img className='Rectangle212' src={whiskey} alt="" /></a>
        </div>
        <a className='IconeNome' href="/#">Bebidas</a>
      </div>
      <div>
        <div className='Icones'>
          <a className='Rectangle212B' href="/#"><img className='Rectangle212' src={ferramentas} alt="" /></a>
        </div>
        <a className='IconeNome' href="/#">Ferramentas</a>
      </div>

      <div>
        <div className='Icones'>
          <a className='Rectangle212B' href="/#"><img className='Rectangle212' src={cuidados} alt="" /></a>
        </div>
        <a className='IconeNome' href="/#">Saúde</a>
      </div>

      <div>
        <div className='Icones'>
          <a className='Rectangle212B' href="/#"><img className='Rectangle212' src={Corrida} alt="" /></a>
        </div>
        <a className='IconeNome' href="/#">Esportes e Fitness</a>
      </div>

      <div>
        <div className='Icones'>
          <a className='Rectangle212B' href="/#"><img className='Rectangle212' src={moda} alt="" /></a>
        </div>
        <a className='IconeNome' href="/#">Moda</a>
      </div>
    </div>
    
  )
}

export default Frame881