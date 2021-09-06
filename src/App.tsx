import React from 'react';
import Education from './components/Education';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <div className="-mt-16 bg-gray-300">
      <div className="container shadow-lg mx-auto bg-gray-50 h-full">
        <Hero />
        <hr className="w-32 m-auto mt-2 fill-current text-gray-700"></hr>
        <Projects />
        <Education />
        <Skills />
      </div>
      </div>
      

      

    </div>
  );
}

export default App;
