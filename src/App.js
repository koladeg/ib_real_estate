import React, { useState } from 'react';
import Content from './components/Content';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { InfoData } from './data/infoData';
import { rentData } from './data/rentData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Hero slides={SliderData}/>
      <Content {...InfoData}/>
      <Gallery rentData={rentData} header= {'Apartments'} />
      <Footer />
    </>
  );
}

export default App;
