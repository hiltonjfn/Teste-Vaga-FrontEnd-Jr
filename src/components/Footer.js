import React from 'react'
import './css/Footer.scss'
import alelo from '../assent/alelo.png'
import Amex from '../assent/amex.png'
import dinners from '../assent/dinners.png'
import elo from '../assent/elo.png'
import ifood from '../assent/ifood.png'
import mastercard from '../assent/mastercard.png'
import pix from '../assent/pix.png'
import sodexo from '../assent/sodexo.png'
import ticket from '../assent/ticket.png'
import visa from '../assent/visa.png'
import econverse from '../assent/econverse.png'
import vtex from '../assent/vtex.png'
import facebook from '../assent/face.png'
import instagram from '../assent/instagram.png'
import yt from '../assent/yt.png'



const Footer = () => {
    return (
        <div>
            <div className='conteinterFooter'>
                <div className='col-2'>
                    <h3 className='footerTitulos'>Sobre nós</h3>
                    <h4 className='footerTxt'>
                        <a href="/#">Conheça</a>
                        <br />
                        <a href="/#">COMO COMPRAR</a>
                        <br />
                        <a href="/#">Indicação e Desconto</a>
                        <br />
                        <a href="/#"><img src={facebook} alt="" /></a>
                        <a href="/#"><img src={instagram} alt="" /></a>
                        <a href="/#"><img src={yt} alt="" /></a>



                    </h4>
                </div>
                <div className='col-2'>
                    <h3 className='footerTitulos'>INFORMAÇÕES ÚTEIS</h3>
                    <h4 className='footerTxt'>
                        <a href="/#">FALE CONOSCO</a>
                        <br />
                        <a href="/#">DÚVIDAS</a>
                        <br />
                        <a href="/#">Prazos de Entrega</a>
                        <br />
                        <a href="/#">Formas de Pagamento</a>
                        <br />
                        <a href="/#">Política de privacidade</a>
                        <br />
                        <a href="/#">Trocas e Devoluções</a>
                    </h4>
                </div>
                <div className='col-2'>
                    <h3 className='footerTitulos'>FORMAS DE PAGAMENTO</h3>
                    <div className='footerImg'>
                        <img src={visa} alt="" />
                        <img src={elo} alt="" />
                        <img src={alelo} alt="" />
                        <br />
                        <img src={dinners} alt="" />
                        <img src={ifood} alt="" />
                        <img src={mastercard} alt="" />
                        <br />
                        <img src={pix} alt="" />
                        <img src={Amex} alt="" />
                        <img src={ticket} alt="" />
                        <br />
                        <img src={sodexo} alt="" />
                    </div>
                </div>
                <div className='col-4 '>
                    <div className='BoxCadastroFooter'>
                        <h1>Cadastre-se e Receba nossas
                            <br />
                            <span>novidades e promoções</span></h1>
                        <p>Excepteur sint occaecat cudatat non ent, sunt in <br /> culpa qui officia lorem ipsum</p>
                        <input placeholder='Seu e-mail' type="text" />
                        <button>OK</button>
                    </div>

                </div>



            </div>
            <div className='Copyright'>
                <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br />
                    É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                <div className='col-4'>
                    <img src={econverse} alt="" />
                    <img src={vtex} alt="" />
                </div>
            </div>




        </div>
    )
}

export default Footer