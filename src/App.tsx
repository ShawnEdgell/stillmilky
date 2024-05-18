import React, { Suspense, lazy } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Box, Container, VStack, HStack, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import MilkyLogo from './assets/Milky.webp';
import NavButton from './components/NavButton';
import SocialMenu from './components/SocialMenu';
import ColorModeSwitcher from './components/ColorModeSwitcher';

const Home = lazy(() => import('./pages/Home'));
const StatsAndSettings = lazy(() => import('./pages/Stats'));
const Mods = lazy(() => import('./pages/Mods'));
const Links = lazy(() => import('./pages/Links'));

const App: React.FC = () => (
  <HelmetProvider>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} minH="100vh" display="flex" flexDirection="column">
      <Box
        bg={useColorModeValue('blue.600', 'gray.800')}
        w="full"
        p={4}
        color={useColorModeValue('white', 'gray.100')}
        shadow="md"
        position="relative"
      >
        <Container maxW="container.md">
          <VStack spacing={2} align="center">
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
          <SocialMenu />
        </Box>
        <Box position="absolute" top={4} left={4}>
          <ColorModeSwitcher />
        </Box>
      </Box>
      <Container maxW="container.md" py={10} flex="1">
        <Suspense fallback={<Text>Loading...</Text>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats-settings" element={<StatsAndSettings />} />
            <Route path="/mods" element={<Mods />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </Suspense>
      </Container>
      <Box
        as="footer"
        py={4}
        bg={useColorModeValue('blue.600', 'gray.800')}
        color={useColorModeValue('white', 'gray.100')}
        textAlign="center"
        mt="auto"
      >
        <Text>&copy; {new Date().getFullYear()} StillMilky. All rights reserved.</Text>
      </Box>
    </Box>
  </HelmetProvider>
);

export default App;
