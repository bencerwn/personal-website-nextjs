import React, { useState } from 'react';
import './App.css';

import AnimatedTitle from './components/AnimatedTitle';


function App() {
  const [animationStage, setAnimationStage] = useState(2)

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-start w-[40rem] h-[25rem]">
          <div className="text-3xl font-semibold">
            Hi, I'm
          </div>

          <AnimatedTitle 
            text="Bence Webber"
            delay={0}
            after={() => {}}
            className="text-[5rem] font-semibold subpixel-antialiased" 
          />

          <button className="transition-colors border border-white border-opacity-60 hover:border-opacity-100 rounded-md text-2xl px-6 py-2">
            Portfolio
          </button>
      </div>
    </div>
  );
}

export default App;
