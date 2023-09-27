import './style.css'
import { useState } from 'react'

import sustenappLogo from '../../assets/logo-sustenapp.png'

export default function Header() {

    const body = document.querySelector("body")
  
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
    if (isOpen === true)  {
      body.style.overflowY = "hidden"
    } else {
      const body = document.querySelector("body")
      body.style.overflowY = "scroll"
    }


    return(
        <header className={`${isOpen && 'ajustedHeight'}`}>
            <div> <img src={sustenappLogo} alt="Logo" /> </div>

            <nav className='nav-bar'>
                <ul>
                    <li><a href="#">Ínicio</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#feedback">Comentários</a></li>
                    <li><a href="#footer">Contato</a></li>
                </ul>
            </nav>
            

            <div onClick={toggleMenu} className={`nav`}>
                <div className={`${isOpen && 'close-menu-right'} line`}></div>
                <div className={`${isOpen && 'display-none'} line`}></div>
                <div className={`${isOpen && 'close-menu-left'} line`}></div>
            </div>

        { isOpen &&
            <nav className='nav-bar-mobile'>
                <ul>
                    <li><a href="#" onClick={toggleMenu}>Ínicio</a></li>
                    <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
                    <li><a href="#feedback" onClick={toggleMenu}>Comentários</a></li>
                    <li><a href="#footer" onClick={toggleMenu}>Contato</a></li>
                </ul>
            </nav>
        
        }
       </header>
    )
}   