import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import LinksTable from '../components/LinksTable';

const Links: React.FC = () => (
  <Box p={4}>
    <Heading as="h1" size="xl" mb={4}>Links</Heading>
    <Text fontSize="lg" mb={4}>Your Links to various sites and servers.</Text>
    <LinksTable />
  </Box>
);

export default Links;
