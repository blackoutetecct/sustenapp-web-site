import './style.css'
import newsletter from '../../assets/newsletter.png'
import plane from '../../assets/blue-plane.png'
import axios from 'axios'

import { EnvelopeSimple, WarningCircle } from 'phosphor-react'

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
                const newsletterNotification = document.querySelector('#newsletterNotification')
                newsletterNotification.style.display = 'block'

                setTimeout(() => {
                    newsletterNotification.style.display = 'none'

                }, 3000)
            })
            .catch(error => {
                const errorNewsletterNotification = document.querySelector('#errorNewsletterNotification')
                errorNewsletterNotification.style.display = 'block'
    
                setTimeout(() => {
                    errorNewsletterNotification.style.display = 'none'
                }, 3000)

            })
        } catch (err) {

            console.log("erro na api")
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

            <div id="newsletterNotification">
             <div>
                 <EnvelopeSimple size={32} color="#1B44B0" weight='bold'/>
                    <h2>Email enviado!</h2>
             </div>
                <p>Seu email foi enviado e está pronto para receber atualizações.</p>
            </div>

            <div id="errorNewsletterNotification">
             <div>
                 <WarningCircle size={32} color="#ff7b00" />
                    <h2>Erro ao cadastrar o email!</h2>
             </div>
                <p>Verifique se as informações cadastradas estão corretas ou tente novamente mais tarde.</p>
            </div>

        </section>
    )
}