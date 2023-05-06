import React from 'react'
import './css/Header.scss'
import Vector from '../assent/Vector.png'
import Truck from '../assent/Truck.png'
import CreditCard from '../assent/CreditCard.png'
import Logo from '../assent/Logo.png'
import Caixa from '../assent/Caixa.png'
import Heart from '../assent/Heart.png'
import UserCircle from '../assent/UserCircle.png'
import ShoppingCart from '../assent/ShoppingCart.png'
import Lupa from '../assent/Lupa.png'

const Header = () => {
    return (
        <div>
            <header>
                <div className='headertop'>
                    <div ><img src={Vector} alt="" />
                        <p>Compra <span>100% segura</span></p></div>
                    <div ><img src={Truck} alt="" />
                        <p> <span>Frete grátis</span>  acima de R$ 200</p></div>
                    <div><img src={CreditCard} alt="" />
                        <p><span>Parcele</span> suas compras</p></div>
                </div>

                <div className='headmid'>
                    <img src={Logo} alt="" />
                    <form className='headmidInputForm' action="">
                    <input className='headmidInput'  placeholder='O que você está buscando?' type="text" />
                    <img className='lupa' src={Lupa} alt="" />
                    
                    </form>
                    <a href="/#"><img src={Caixa} alt="" /></a>
                    <a href="/#"><img src={Heart} alt="" /></a>
                    <a href="/#"><img src={UserCircle} alt="" /></a>
                    <a href="/#"><img src={ShoppingCart} alt="" /></a>
                    
                    
                    
                    
                </div>

                <div className='headerbottom'>
                    <a href="/#">Todas Categorias</a>
                    <a href="/#">Supermercado</a>
                    <a href="/#">Livros</a>
                    <a href="/#">Moda</a>
                    <a href="/#">Lançamentos</a>
                    <a href="/#">Ofertas do dia</a>
                    <a href="/#">Assinatura</a>
                </div>
            </header>
            
           <div className='headerImg'>
            <p>Venha conhecer nossas <br /> promoções <br /> <span>50% Off nos produtos</span></p>
            <button>Ver produto</button>
           </div>
        </div>
    )
}

export default Header