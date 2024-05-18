import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Image, useColorModeValue } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import TwitchLogo from '../assets/Twitch.svg';
import DiscordLogo from '../assets/Discord.svg';
import YouTubeLogo from '../assets/YouTube.svg';
import InstagramLogo from '../assets/Instagram.svg';
import TikTokLogo from '../assets/TikTok.svg';

const SocialMenu: React.FC = () => {
  const menuTextColor = useColorModeValue('black', 'white');

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        colorScheme="blue"
        px={{ base: 2, md: 4 }}
        py={{ base: 1, md: 2 }}
        fontSize={{ base: 'sm', md: 'md' }}
        _hover={{ bg: 'blue.700' }}
        _active={{ bg: 'blue.700' }}
        _focus={{ boxShadow: 'none' }}
      >
        Socials
      </MenuButton>
      <MenuList color={menuTextColor} width="150px">
        <MenuItem as="a" href="https://discord.gg/CeKjWbGhmf" target="_blank">
          <Image src={DiscordLogo} alt="Discord Logo" boxSize="20px" mr={2} />
          Discord
        </MenuItem>
        <MenuItem as="a" href="https://www.youtube.com/channel/UC7361pUdOT7EKWp-K6awlGw" target="_blank">
          <Image src={YouTubeLogo} alt="YouTube Logo" boxSize="20px" mr={2} />
          YouTube
        </MenuItem>
        <MenuItem as="a" href="https://www.twitch.tv/stillmilky" target="_blank">
          <Image src={TwitchLogo} alt="Twitch Logo" boxSize="20px" mr={2} />
          Twitch
        </MenuItem>
        <MenuItem as="a" href="https://www.instagram.com/stillmilky" target="_blank">
          <Image src={InstagramLogo} alt="Instagram Logo" boxSize="20px" mr={2} />
          Instagram
        </MenuItem>
        <MenuItem as="a" href="https://www.tiktok.com/@iamstillmilky" target="_blank">
          <Image src={TikTokLogo} alt="TikTok Logo" boxSize="20px" mr={2} />
          TikTok
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SocialMenu;
