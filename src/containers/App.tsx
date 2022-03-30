import React, { ElementType, FunctionComponent, useEffect, useState } from 'react';
import BackgroundParallax from '../components/BackgroundParallax';
import { Box, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactTextTransition, { presets } from 'react-text-transition';

const TYPES: string[] = [
  'servers',
  'applications',
  'mobile applications',
  'web services',
  'full-stack applications'
];

const Slogan = ({ index }: { index: number }) => (
  <Stack direction='row' spacing={1} sx={{ position: 'absolute', color: 'white', bottom: '15vh' }}>
    <Typography>At Saphirex, we develop</Typography>
    <Typography component={ReactTextTransition} text={TYPES[index % TYPES.length]} springConfig={ presets.gentle } sx={{ fontWeight: 'bold' }} />
    <Typography>with unique code and quality thinking about security and performance that allow you to have unique experiences!</Typography>
  </Stack>
);

const Links = () => {

  const onClick = (url: string) => window.open(url, '_blank');
  const Link = ({ icon, url }: { icon: ElementType, url: string }) => <Box component={icon} onClick={() => onClick(url)} sx={{ fontSize: '2.5vw', cursor: 'pointer' }} />

  return (
    <Box sx={{ position: 'absolute', bottom: '1.5vh', right: '1.5vw', color: 'white' }}>
      <Link icon={GitHubIcon} url='https://github.com/Saphirex-Industries' />
    </Box>
  );
}

const App: FunctionComponent = () => {

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex(index => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <BackgroundParallax>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, .8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box component='img' src='./images/logo-3000x2000.png' sx={{ width: '50vw' }} draggable={false} />
        <Slogan index={index} />
        <Links />
      </Box>
    </BackgroundParallax>
  );
}

export default App;
