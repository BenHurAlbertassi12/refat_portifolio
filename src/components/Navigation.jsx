import React from 'react';
import './styles/Navigation.css';
import Contatos from './Navigation_component/Contato';
import Stacks from './Navigation_component/Stacks';

const Navigation = () => {
  return (
    <section className='section_stacks_navigation'>
      <Stacks />
      <div className='div_navigation'>1</div>
      <div className='div_navigation'>3</div>
      <Contatos />
    </section>
  );
};

export default Navigation;
