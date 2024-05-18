import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LinksTable from '../components/LinksTable';

const Links: React.FC = () => (
  <HelmetProvider>
    <Box p={4}>
      <Helmet>
        <title>StillMilky | Links</title>
      </Helmet>
      <Heading as="h1" size="xl" mb={4}>Links</Heading>
      <Text fontSize="lg" mb={4}>Your Links to various sites and servers.</Text>
      <LinksTable />
    </Box>
  </HelmetProvider>
);

export default Links;
