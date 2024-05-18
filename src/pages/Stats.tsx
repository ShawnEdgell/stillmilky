import React from 'react';
import { Box, Heading, Text, Button, VStack, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Stats: React.FC = () => {
  const fileUrlFishy = 'https://firebasestorage.googleapis.com/v0/b/stillmilkylive.appspot.com/o/Milky_FishyStats.zip?alt=media&token=305d8e75-3569-43f3-b074-3ad615560e4e';
  const fileUrlSharky = 'https://firebasestorage.googleapis.com/v0/b/stillmilkylive.appspot.com/o/Milky_SharkyStats.zip?alt=media&token=3d4abf7d-3f01-4393-8490-ae2e230ab29f';
  const fileUrlFroggy = 'https://firebasestorage.googleapis.com/v0/b/stillmilkylive.appspot.com/o/Milky_FroggyStats.zip?alt=media&token=0179b9fd-3d9c-4c36-a487-184c64644fb0';


  return (
    <HelmetProvider>
      <Box p={4}>
        <Helmet>
          <title>StillMilky | Skater XL Stats</title>
        </Helmet>
        <VStack spacing={4} align="start">
          <Heading as="h1" size="xl">Skater XL Stats</Heading>
          <Heading as="h2" size="md">Fishy Stats (Latest)</Heading>
          <Text fontSize="lg">
          14 Gravity. Still a work in progress. These are the latest stats I've been using. Includes a mixture of old settings with new stuff mixed in, a bunch of new steeze settings for high pops.
          </Text>
          <Button as="a" href={fileUrlFishy} download colorScheme="blue">
            Download Fishy Stats
          </Button>
          <Heading as="h2" size="md">Sharky Stats</Heading>
          <Text fontSize="lg">
          13 gravity. Automatic steeze set up for most tricks. Custom catch and stances for pretty much everything.
          </Text>
          <Button as="a" href={fileUrlSharky} download colorScheme="blue">
            Download Sharky Stats
          </Button>
          <Heading as="h2" size="md">Froggy Stats</Heading>
          <Text fontSize="lg">
          15 Gravity. These stats have a bunch of 'automatic steeze' settings set up with the XXL3 Mod. To make these work properly Fro's Realistic Catch has been turned off.
          </Text>
          <Button as="a" href={fileUrlFroggy} download colorScheme="blue">
            Download Froggy Stats
          </Button>
          <Heading as="h2" size="lg" mt={8}>How to Install</Heading>
          <Text fontSize="lg">
            Extract the .zip folder to find each of these stat files, and place them in the following directories:
          </Text>
          <VStack align="start" spacing={2}>
            <Text fontSize="lg">
              <strong>Stats: </strong>
              <code>Documents/SkaterXL/XXLMod3/StatsCollections</code>
            </Text>
            <Text fontSize="lg">
              <strong>Stance: </strong>
              <code>Documents/SkaterXL/XXLMod3/StanceCollections</code>
            </Text>
            <Text fontSize="lg">
              <strong>Steeze: </strong>
              <code>Documents/SkaterXL/XXLMod3/SteezeCollections</code>
            </Text>
            <Text fontSize="lg">
              <strong>BonedOllieModSettings: </strong>
              <code>Documents/SkaterXL/BonedOllieMod</code>
            </Text>
            <Text fontSize="lg">
              <strong>Fro's Mod Settings: </strong>
              <code>Steam/steamapps/common/SkaterXL/fro-mod</code>
            </Text>
          </VStack>
          <Alert status="info" mt={4} borderRadius="md">
            <AlertIcon />
            <AlertDescription fontSize="lg">
              Note: For the BonedOllieMod and Fro's Mod settings, you'll need to replace the existing settings files with the new ones you downloaded.
            </AlertDescription>
          </Alert>
        </VStack>
      </Box>
    </HelmetProvider>
  );
};

export default Stats;
