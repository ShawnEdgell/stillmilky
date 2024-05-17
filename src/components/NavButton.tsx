// src/components/NavButton.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ to, children }) => (
  <Button
    as={NavLink}
    to={to}
    variant="ghost"
    _activeLink={{ bg: 'blue.800', color: 'white' }}
    _hover={{ bg: 'blue.700' }}
    colorScheme="white"
    px={4}
    py={2}
  >
    {children}
  </Button>
);

export default NavButton;
