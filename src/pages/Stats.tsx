import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Stats: React.FC = () => {
  // You can update the URL to the actual file hosted on Firebase
  const fileUrl = 'https://firebasestorage.googleapis.com/v0/b/stillmilkylive.appspot.com/o/Milky_FishyStats.zip?alt=media&token=305d8e75-3569-43f3-b074-3ad615560e4e';

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Stats</Heading>
      <Text fontSize="lg" mb={4}>Your stats and settings for various video games will be displayed here.</Text>
      <Button as="a" href={fileUrl} download colorScheme="blue" mt={4}>
        Download Stats File
      </Button>
    </Box>
  );
};

export default Stats;
