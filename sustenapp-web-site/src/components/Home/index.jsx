import './style.css'
import '../../assets/logo-sustenapp.png'
import homeImage from '../../assets/home-image.png'

// COMPONENTS

export default function Home() {
    return( 
        <>
        <section className="home">

                <h1> A casa do futuro <br /> no <span> presente </span> </h1>
                <p> Controlamento e Gerenciamento dos <br /> gastos de energia e água </p>
         
                <img src={homeImage} />
        </section> 

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1B44B0" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,101.3C480,128,600,224,720,256C840,288,960,256,1080,245.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
</>
    )
}