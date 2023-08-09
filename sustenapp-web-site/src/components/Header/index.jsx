import './style.css'
import sustenappLogo from '../../assets/logo-sustenapp.png'

export default function Header() {

    return(
        <header>
            <div> <img src={sustenappLogo} alt="Logo" /> </div>
            <nav>
                <ul>
                    <li><a href="#inicio">Ínicio</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#comentarios">Comentários</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
    </header>
    )
}   