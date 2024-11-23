import React from 'react';
import './styles/Profile.css';

import perfil from '../image/perfil.png'

const Profile = () => {
  return (
    <section className='section_profile'>
      <div className='div_nome'>
        <h1 className='titulos_section'>
          BenHur <br></br> Albertassi
        </h1>
        <h3 className='titulos_section_sobre'>Sobre mim</h3>
        <p>
          Oi, sou o BenHur, mas pode me chamar de Ben.
          Sou do tipo tranquilo, gosto de ficar na minha, mas sempre estou por
          perto quando tem um rolê. Costumo ser caladão, então não se assuste se
          eu me ausentar do nada.
          <br />
          <br />
          Adoro assistir anime, andar de patins e, claro, não posso viver sem
          música. Outra curiosidade: sou competidor de Pokémon TCG.
          <br />
          {/* <br />
          Dar uma caminhada é algo que me relaxa tremendamente... basicamente,
          eu saio e deixo a música fazer o trabalho. Às vezes, é só isso que
          preciso para não dar uma "pirada".
          <br /> */}
          <br />
          Acredito muito na liberdade, mas com responsabilidade. Cada um deve
          ser livre para ser quem quiser. Como diria Raul: Viva a Sociedade
          Alternativa.
          
        </p>
      </div>
      <div className='nova_img'>
        <div className='div_img_perfil'>
          <img className='img_perfil' src={perfil} alt='Profile' />
        </div>
      </div>
      <div className='div_stacks'>
        <h1 className='titulos_section_2'>
          Engenheiro de Dados & <br></br> Desenvolvedor Full-Stack
        </h1>
        <p>
          Sou engenheiro de dados, mas minha jornada começou como desenvolvedor
          full-stack. Ao longo do tempo, fui me apaixonando por dados e
          otimização de processos. Gosto de transformar informações bagunçadas
          em soluções simples e úteis.
          <br />
          <br />
          Tenho experiência com Python, SQL, Spark e Azure. O aprendizado
          contínuo é essencial, já que a tecnologia nunca para de evoluir.
          <br />
          <br />O que mais me motiva é ver o impacto direto do meu trabalho,
          seja melhorando o desempenho de sistemas ou ajudando equipes a tomar
          decisões baseadas em dados.
        </p>
      </div>
    </section>
  );
};

export default Profile;
