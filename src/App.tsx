import React, { FunctionComponent, useEffect } from 'react';
import * as CSS from 'csstype';
import './App.css';

const getRandomArbitrary = (min: number, max: number): number => Math.random() * (max - min) + min;

const App: FunctionComponent = () => {

  const onMouseMove = (event: MouseEvent) => document.documentElement.style.setProperty('--x', `${event.clientX}px`);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section>
      <div className='text'>
        {
          Array.from({ length: 10 }, (_, i) => (
            <h2 key={i} style={{ '--i': getRandomArbitrary(-.1, 3) } as CSS.Properties}>
              {Array.from({ length: 10 }, (_, ii) => <span key={ii}>Saphirex</span>)}
            </h2>
          ))
        }
      </div>
    </section>
  );
}

export default App;
