import './style.css'
import newsletter from '../../assets/newsletter.png'
import plane from '../../assets/blue-plane.png'
import axios from 'axios'

import { EnvelopeSimple } from 'phosphor-react'

export default function Newsletter() {
    
    async function newsletterAPI() {
        
       event.preventDefault()
    
    const inputEmail = document.querySelector('#email')
    const email = inputEmail.value

        try {
            axios.post(`https://sustenapp-newsletters-api-production.up.railway.app/usuario`, {
                email: email
            })
            .then(response => {
                console.log('Email enviado com sucesso')
            })
        } catch (err) {
            console.error('Erro na requisição da API: ' + err)
        }

    }

    return(
        <section className="newsletter">

                <img className="plane" src={plane} />

            <form onSubmit={newsletterAPI} className="newsletter-flex">
                <div>
                    <h1 className="title"> Se inscreva em <br /><span> Nosso <span className="strong">Newsletter!</span></span> </h1>
                    <p>Assine nosso newsletter e fique atualizado</p>
                    <div className="flex-input">
                        <EnvelopeSimple size={32} color="#1E4CC6" className="position-input-icon" weight="bold" /> <input id="email" name="" type="email" placeholder="Digite seu email" required /> <br />
                         <input type="submit" value="ENVIAR" />
                    </div>
                </div>
                    <img src={newsletter} className="newsletter-img"/>
            </form>

        </section>
    )
}