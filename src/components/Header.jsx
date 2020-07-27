import React from 'react';
import logoPlatzi from "../assets/images/logo-platzi-video-BW2.png";
import logoUser from "../assets/images/user-icon.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={logoPlatzi} alt="Platzi Video"/>
        <div className="header__menu">
          <div className="header__menu--profile">
            <img src={logoUser} alt=""/>
              <p>Perfil</p>
          </div>
          <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
          </ul>
        </div>
    </header>
  );
};

export default Header;
