import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Box, Container, VStack, HStack, Image, Text } from '@chakra-ui/react';
import Home from './pages/Home';
import StatsAndSettings from './pages/Stats';
import Mods from './pages/Mods';
import MilkyLogo from './assets/Milky.webp';
import NavButton from './components/NavButton';
import TwitchLogo from './assets/Twitch.svg';
import YouTubeLogo from './assets/YouTube.svg';

const App: React.FC = () => (
  <Box bg="gray.100" minH="100vh" display="flex" flexDirection="column">
    <Box bg="blue.600" w="full" p={4} color="white" shadow="md" position="relative">
      <Container maxW="container.md">
        <VStack spacing={4} align="center">
          <NavLink to="/">
            <Image src={MilkyLogo} alt="StillMilky Logo" boxSize="100px" objectFit="contain" />
          </NavLink>
          <HStack spacing={4}>
            <NavButton to="/">Home</NavButton>
            <NavButton to="/stats-settings">Stats & Settings</NavButton>
            <NavButton to="/mods">Mods</NavButton>
          </HStack>
        </VStack>
      </Container>
      <Box position="absolute" top={4} right={4}>
        <HStack spacing={3}>
        <NavLink to="https://www.youtube.com/channel/UC7361pUdOT7EKWp-K6awlGw" target="_blank">
            <Image src={YouTubeLogo} alt="YouTube Logo" boxSize="30px" />
          </NavLink>
          <NavLink to="https://www.twitch.tv/stillmilky" target="_blank">
            <Image src={TwitchLogo} alt="Twitch Logo" boxSize="25px" />
          </NavLink>

        </HStack>
      </Box>
    </Box>
    <Container maxW="container.md" py={10} flex="1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats-settings" element={<StatsAndSettings />} />
        <Route path="/mods" element={<Mods />} />
      </Routes>
    </Container>
    <Box as="footer" py={4} bg="blue.600" color="white" textAlign="center">
      <Text>&copy; {new Date().getFullYear()} StillMilky. All rights reserved.</Text>
    </Box>
  </Box>
);

export default App;
