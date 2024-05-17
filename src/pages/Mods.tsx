import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import ModsAccordion from '../components/ModsAccordion';

const Mods: React.FC = () => (
  <Box p={4}>
    <Heading as="h1" size="xl" mb={4}>Mods</Heading>
    <Text fontSize="lg" mb={4}>Mods and custom content for your favorite games will be available here.</Text>
    <ModsAccordion />
  </Box>
);

export default Mods;
