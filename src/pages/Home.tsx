import React from 'react';
import { Heading, Text, Box } from '@chakra-ui/react';
import YouTubeVideos from '../components/YouTubeVideos';

const Home: React.FC = () => (
  <Box p={4}>
    <YouTubeVideos />
  </Box>
);

export default Home;
