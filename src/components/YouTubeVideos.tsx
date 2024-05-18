import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { getLatestYouTubeVideo } from '../youtubeService';

const Home: React.FC = () => {
  const [latestVideo, setLatestVideo] = useState<{ id: string; snippet: any } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const video = await getLatestYouTubeVideo();
        setLatestVideo(video);
      } catch (err: any) {
        setError('Failed to fetch the latest video.');
      }
    };

    fetchLatestVideo();
  }, []);

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Welcome to StillMilky</Heading>
      <Text fontSize="lg" mb={4}>Your hub for skateboarding content, stats, settings, mods, and more.</Text>
      {error && <Text color="red.500">{error}</Text>}
      {latestVideo && (
        <Box>
          <Heading as="h2" size="lg" mb={2}>{latestVideo.snippet.title}</Heading>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${latestVideo.id}`}
            title={latestVideo.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>
      )}
    </Box>
  );
};

export default Home;
