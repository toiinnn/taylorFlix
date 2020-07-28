import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import '../../pages/cadastro/Video'
import Button from '../Button';
function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Toinflix logo" /> 
            </Link>

            <Button as={Link} className="Button" to="/cadastro/video">    
                Novo vídeo
            </Button>


        </nav>
    );
}

export default Menu;
