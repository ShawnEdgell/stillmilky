import React from 'react';
import { Button } from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ to, children }) => (
  <Button
    as={RouterNavLink}
    to={to}
    variant="ghost"
    _activeLink={{ bg: 'blue.800', color: 'white' }}
    _hover={{ bg: 'blue.700' }}
    colorScheme="white"
    px={{ base: 2, md: 4 }} // Smaller padding on small screens
    fontSize={{ base: 'sm', md: 'md' }} // Smaller font size on small screens
  >
    {children}
  </Button>
);

export default NavButton;
