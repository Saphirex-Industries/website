// Credits of this text parallax effect: https://youtu.be/ADAmKlVs25w

import React, { FunctionComponent, PropsWithChildren, useEffect } from "react";
import { Box } from "@mui/material";
import './BackgroundParallax.css';

const TEXT_AMOUNT_X: number = 20;
const TEXT_AMOUNT_Y: number = 10;

const getRandomArbitrary = (min: number, max: number): number => Math.random() * (max - min) + min;
const randomValues: number[] = Array.from({ length: TEXT_AMOUNT_Y }, () => getRandomArbitrary(-.1, 3));

const BackgroundParallax: FunctionComponent = ({ children }: PropsWithChildren<any>) => {

  const onMouseMove = ({ clientX }: MouseEvent) => document.documentElement.style.setProperty('--x', `${clientX}px`);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <Box>
      <Box component='section'>
        <Box className='text'>
          {Array.from({ length: TEXT_AMOUNT_Y }, (_, i) => (
            <Box component='h2' key={i} style={{ '--i': randomValues[i] } as any}>
              {Array.from({ length: TEXT_AMOUNT_X }, (_, ii) => <Box component='span' key={ii}>Saphirex</Box>)}
            </Box>
          ))}
        </Box>
      </Box>
      {children}
    </Box>
  );
}

export default BackgroundParallax;
