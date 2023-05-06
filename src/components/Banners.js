import React from 'react'
import './css/Banners.scss'


const Banners = (conteiner) => {
  return (

    <div className={conteiner.conteiner === true ? 'BannersContainer bc-2' : 'BannersContainer'}>
      <div className='BannersDiv'>
        <h1>Parceiros</h1>
        <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
        <button>Confira</button>
      </div>
      <div className='BannersDiv'>
        <h1>Parceiros</h1>
        <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
        <button>Confira</button>
      </div>


    </div>

  )
}

export default Banners