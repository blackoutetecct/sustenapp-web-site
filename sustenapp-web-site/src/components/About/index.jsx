import './style.css'
import apresentation from '../../assets/apresentacao.png'
import apresentation1 from '../../assets/apresentacao1.png'
import apresentation2 from '../../assets/apresentacao2.png'
import AboutCard from '../AboutCard'


export default function About() {

    return(
        <section className='about'>

            <h1>SOBRE NOSSO APP</h1>

            <div className='grid-content'>
                <AboutCard  
                description="Com o SustenApp, você pode realizar ações como desligar aparelhos eletrônicos que não estão em uso."
                image={apresentation} />

                <AboutCard
                description="Aproveitamento dos recursos naturais, como a luz solar e água da chuva, diminuindo fontes não renováveis." 
                image={apresentation1} />

                <AboutCard  
                description="Regar uma horta periodicamente utilizando água de reuso,  promovendo a sustentabilidade." 
                image={apresentation2} />
            </div>

        </section>
    )
}