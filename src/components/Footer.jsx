import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} BenHur Albertassi. Todos os direitos
        reservados.
      </p>
      <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
        GitHub
      </a>{' '}
      |{' '}
      <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
