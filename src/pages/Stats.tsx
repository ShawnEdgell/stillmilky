import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Stats: React.FC = () => (
  <Box p={4}>
    <Heading as="h1" size="xl" mb={4}>Stats</Heading>
    <Text fontSize="lg">Your stats and settings for various video games will be displayed here.</Text>
  </Box>
);

export default Stats;
