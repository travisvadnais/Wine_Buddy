import React, { Component } from 'react';
import Nav from './components/Nav/Nav.js';
import InstructionCard from './components/InstructionCard/InstructionCard.js';
import instructions from './components/InstructionCard/InstructionInfo.json';
import Button from './components/Button/Button.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* I built this class stack in another HW and it works for this type of thing */}
        <div className="d-flex flex-wrap justify-content-center col-sm-12 mx-auto carousel">
          {
            instructions
            .map(instruction => (
              <InstructionCard
                id={instruction.id}
                key={instruction.id}
                step={instruction.step}
                img={instruction.img}
                alt={instruction.desc}
              />
            ))
          }
        </div>
        <Button />
        <Footer />
      </div>
    );
  }
}

export default App;
