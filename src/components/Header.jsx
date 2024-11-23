import React from 'react';
import './styles/Header.css';

import icAzure from '../image/icons8-azure-48.png';
import icPython from '../image/icons8-python-48.png';
import icJavaScript from '../image/icons8-javascript-48.png';
import icReact from '../image/icons8-nativo-de-reagir-48.png';
import icAnguar from '../image/icons8-angular-64.png';

const Header = () => {
  return (
      <header>
          <div className='div_header'>
              
      <div className='icon_stacks'>
        <img className='img_stacks' src={icAzure} alt='Azure' />
        <img className='img_stacks' src={icPython} alt='Python' />
        <img className='img_stacks' src={icJavaScript} alt='JavaScript' />
        <img className='img_stacks' src={icReact} alt='React' />
        <img className='img_stacks' src={icAnguar} alt='Angular' />
      </div>
      <p className='p-title'>Engenheiro de Dados & Desenvolvedor Full-Stack</p>
      <p className='p-title'>Contato</p>
          </div>

    </header>
  );
};

export default Header;
