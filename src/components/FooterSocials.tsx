// src/components/FooterSocials.tsx
import React from 'react';
import { HStack, Link, Center, useColorModeValue } from '@chakra-ui/react';
import TwitchLogo from '../assets/Twitch.svg';
import DiscordLogo from '../assets/Discord.svg';
import YouTubeLogo from '../assets/YouTube.svg';
import InstagramLogo from '../assets/Instagram.svg';
import TikTokLogo from '../assets/TikTok.svg';

const FooterSocials: React.FC = () => {
  const iconHoverColor = useColorModeValue('blue.500', 'gray.300');
  const iconColor = useColorModeValue('black', 'white');

  const socialLinks = [
    { href: 'https://discord.gg/CeKjWbGhmf', src: DiscordLogo, alt: 'Discord Logo' },
    { href: 'https://www.youtube.com/channel/UC7361pUdOT7EKWp-K6awlGw', src: YouTubeLogo, alt: 'YouTube Logo' },
    { href: 'https://www.twitch.tv/stillmilky', src: TwitchLogo, alt: 'Twitch Logo' },
    { href: 'https://www.instagram.com/stillmilky', src: InstagramLogo, alt: 'Instagram Logo' },
    { href: 'https://www.tiktok.com/@iamstillmilky', src: TikTokLogo, alt: 'TikTok Logo' },
  ];

  return (
    <Center>
      <HStack spacing={6} color={iconColor}>
        {socialLinks.map((link) => (
          <Link
            key={link.alt}
            href={link.href}
            isExternal
            _hover={{ transform: 'scale(1.1)', color: iconHoverColor }}
            _focus={{ boxShadow: 'none' }}
          >
            <img
              src={link.src}
              alt={link.alt}
              width="32px"
              height="32px"
              style={{
                filter: `invert(${iconColor === 'white' ? 1 : 0})`,
                transition: 'transform 0.2s',
              }}
            />
          </Link>
        ))}
      </HStack>
    </Center>
  );
};

export default FooterSocials;
