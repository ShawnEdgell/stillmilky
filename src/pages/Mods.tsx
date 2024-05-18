import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ModsAccordion from '../components/ModsAccordion';

const Mods: React.FC = () => (
  <HelmetProvider>
    <Box p={4}>
      <Helmet>
        <title>StillMilky | Mods</title>
      </Helmet>
      <Heading as="h1" size="xl" mb={4}>Mods</Heading>
      <Text fontSize="lg" mb={4}>Mods and custom content for your favorite games will be available here.</Text>
      <ModsAccordion />
    </Box>
  </HelmetProvider>
);

export default Mods;
