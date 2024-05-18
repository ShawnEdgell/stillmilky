// src/App.tsx
import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Box, Container, VStack, HStack, Image, Text } from '@chakra-ui/react';
import Home from './pages/Home';
import StatsAndSettings from './pages/Stats';
import Mods from './pages/Mods';
import Links from './pages/Links';
import MilkyLogo from './assets/Milky.webp';
import NavButton from './components/NavButton';
import { HelmetProvider } from 'react-helmet-async';
import SocialsMenu from './components/SocialsMenu';

const App: React.FC = () => (
  <HelmetProvider>
    <Box bg="gray.100" minH="100vh" display="flex" flexDirection="column">
      <Box bg="blue.600" w="full" p={4} color="white" shadow="md" position="relative">
        <Container maxW="container.md">
          <VStack spacing={4} align="center">
            <NavLink to="/">
              <Image src={MilkyLogo} alt="StillMilky Logo" boxSize="100px" objectFit="contain" />
            </NavLink>
            <HStack>
              <NavButton to="/">Home</NavButton>
              <NavButton to="/stats-settings">Stats & Settings</NavButton>
              <NavButton to="/mods">Mods</NavButton>
              <NavButton to="/links">Links</NavButton>
            </HStack>
          </VStack>
        </Container>
        <Box position="absolute" top={4} right={4}>
          <SocialsMenu />
        </Box>
      </Box>
      <Container maxW="container.md" py={10} flex="1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats-settings" element={<StatsAndSettings />} />
          <Route path="/mods" element={<Mods />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </Container>
      <Box as="footer" py={4} bg="blue.600" color="white" textAlign="center" mt="auto">
        <Text>&copy; {new Date().getFullYear()} StillMilky. All rights reserved.</Text>
      </Box>
    </Box>
  </HelmetProvider>
);

export default App;
