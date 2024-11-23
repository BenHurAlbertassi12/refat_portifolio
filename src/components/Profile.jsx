import React from 'react';

const Profile = () => {
  return (
    <section>
      <img
        src='https://via.placeholder.com/150'
        alt='Profile'
        style={{
          borderRadius: '50%',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
        }}
      />
      <p>
        Bem-vindo ao meu portfólio! Sou apaixonado por transformar dados em
        soluções e construir projetos incríveis.
      </p>
    </section>
  );
};

export default Profile;
