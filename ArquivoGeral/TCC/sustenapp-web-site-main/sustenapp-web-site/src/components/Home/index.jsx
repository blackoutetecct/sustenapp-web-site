import './style.css'
import { useInView } from 'react-intersection-observer'
import '../../assets/logo-sustenapp.png'
import homeImage from '../../assets/home-image.png'
import grafico from '../../assets/grafico.png'
import bolhas from '../../assets/bolhas.png'
import floatBolhas from '../../assets/float-bolhas.png'
import building from '../../assets/building.svg'
import energy from '../../assets/energy.svg'
import water from '../../assets/water.svg'


import { GooglePlayLogo, Option } from 'phosphor-react'

// COMPONENTS

export default function Home() {
    return( 
        <>
        <section className="home" >

                <h1> A casa do futuro <br /> no <span> presente </span> </h1>
                <p> Controlamento e Gerenciamento dos <br /> gastos de energia e água </p>
         
                <div className="position-image">
                    <img src={homeImage} />
                    <img src={grafico} />
                </div>

                <a className='download' href="/"> <GooglePlayLogo className="downloadIcon" size={32} color="#ffff" /> <span> DOWNLOAD APP</span> </a>
 
        </section> 
        <div className="wave-container"></div>

        <img className="bolhas2" src={bolhas} />
        <img className="bolhas" src={bolhas} />
        <img className='float-bolhas' src={floatBolhas} />


        <div className="title-statics">

            <h2 className='title-residencia'>Residências</h2>
            <img src={building} id="building" />
            <p>Lorem Ipsum is simply dummy text of the printing.</p>

            <h2 className='title-energy'>Energia Poupada</h2>
            <img src={energy} id="energy" />
            <p id="text-energy">Lorem Ipsum is simply dummy text of the printing.</p>

            <h2 className='title-water'>Agua Gerenciada</h2>
            <img src={water} id="water" />
            <p id="text-water">Lorem Ipsum is simply dummy text of the printing.</p>
            
        </div>

        <div className="line"></div>
        <div className="line" id="line1"></div>
</>

    
    )
}