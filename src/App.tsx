import React from 'react';
import './App.css';

import Header from './shared/components/header/header.component';
import Home from './shared/components/home/home.component';
import { Projects } from './shared/components/projects/projects.components';
import { Skills } from './shared/components/skills/skills.component';
import { Contact } from './shared/components/contact/contact.component';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons';

AOS.init();

function App() {
  return (
    <div className="App absolute h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
