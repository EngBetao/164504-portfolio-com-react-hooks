import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '20px 0', borderBottom: '1px solid #2a2b36' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Portfólio<span style={{color:'var(--primary)'}}>.</span></h2>
        <nav>
          <ul style={{ display: 'flex', gap: '30px', fontSize: '0.9rem' }}>
            <li><Link to="/">Projetos</Link></li>
            <li><Link to="/">Tecnologias</Link></li>
            <li><Link to="/">Sobre mim</Link></li>
          </ul>
        </nav>
        <div style={{ fontSize: '1.2rem', cursor: 'pointer' }}>
          GitHub 
        </div>
      </div>
    </header>
  );
};

export default Header;