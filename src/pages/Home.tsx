import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    <HelmetProvider>
      <Box p={4}>
        <Helmet>
          <title>StillMilky | Home</title>
        </Helmet>
        <Heading as="h1" size="xl" mb={4}>Latest YouTube Upload</Heading>
        {error && <Text color="red.500">{error}</Text>}
        {latestVideo && (
          <Box position="relative" paddingBottom="56.25%" height="0" overflow="hidden" borderRadius="lg">
            <iframe
              src={`https://www.youtube.com/embed/${latestVideo.id}`}
              title={latestVideo.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '12px',
              }}
            ></iframe>
          </Box>
        )}
      </Box>
    </HelmetProvider>
  );
};

export default Home;
