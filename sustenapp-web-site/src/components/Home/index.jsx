import './style.css'
import '../../assets/logo-sustenapp.png'
import homeImage from '../../assets/home-image.png'
import grafico from '../../assets/grafico.png'
import bolhas from '../../assets/bolhas.png'
import floatBolhas from '../../assets/float-bolhas.png'
import building from '../../assets/building.svg'
import energy from '../../assets/energy.svg'

import { GooglePlayLogo } from 'phosphor-react'

// COMPONENTS

export default function Home() {
    return( 
        <>
        <section className="home">

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
        <img className='building' src={building} />
        <img className='energy' src={energy} />

        <div className="title-statics">

            <h2>Residencias</h2>
            <h2>Energia Ecônomizada</h2>
            <h2>Agua Gerenciada</h2>
        </div>
</>
    )
}