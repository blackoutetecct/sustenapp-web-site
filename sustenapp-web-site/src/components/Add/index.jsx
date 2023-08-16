import './style.css'

import add from '../../assets/add.png'
import { GooglePlayLogo, Star } from 'phosphor-react'


export default function Add() {

    return(

        <section className="add">
            <img src={add} alt="" />

            <div>
                <h1> Com o app <span> simplifique </span> sua vida como nunca! </h1>
                <p>Com o SustenApp, você pode saber o valor das contas antes mesmo de recebê-las, de maneira simples e automática.</p>
                <div>
                    <a href="#" className='downloadLink'><GooglePlayLogo className='downloadAppIcon' size={25} color="white" weight="bold" />  DOWNLOAD APP</a>
                    <a href="#" className='feedbackDownload'><Star size={25} className='downloadAppIcon' color="black" weight="bold" />  Ver avaliações</a>
                </div>
            </div>
        </section>

    )
}