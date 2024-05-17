import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Button } from '@chakra-ui/react';

const ModsAccordion: React.FC = () => (
  <Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Mod 1: Custom Skater XL Deck
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Box mb={4}>
          This mod provides a custom deck for Skater XL, enhancing your skating experience with unique designs and improved textures.
        </Box>
        <Button as="a" href="https://mod.io/g/skaterxl" colorScheme="blue" target="_blank" rel="noopener noreferrer">
          Download Mod
        </Button>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Mod 2: Realistic Physics for Session
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Box mb={4}>
          This mod tweaks the physics engine of Session to provide a more realistic and challenging skating experience.
        </Box>
        <Button as="a" href="https://mod.io/g/skaterxl" colorScheme="blue" target="_blank" rel="noopener noreferrer">
          Download Mod
        </Button>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Mod 3: Expanded Trick Library
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Box mb={4}>
          Add new tricks to your repertoire with this mod, featuring an expanded library of tricks for both Skater XL and Session.
        </Box>
        <Button as="a" href="https://mod.io/g/skaterxl" colorScheme="blue" target="_blank" rel="noopener noreferrer">
          Download Mod
        </Button>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export default ModsAccordion;
