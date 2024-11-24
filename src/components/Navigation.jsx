import React from 'react';
import './styles/Navigation.css';
import Contatos from './Navigation_component/Contato';

const Navigation = () => {
  return (
    <section className='section_stacks_navigation'>
      <div className='div_navigation'>1</div>
      <div className='div_navigation'>3</div>
      <div className='div_navigation'>4</div>
      <Contatos />
    </section>
  );
};

export default Navigation;
