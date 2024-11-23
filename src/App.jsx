import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Profile />
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;
