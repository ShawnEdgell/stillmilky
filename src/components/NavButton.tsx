import React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ to, children }) => {
  const activeBg = useColorModeValue('blue.800', 'gray.700');
  const hoverBg = useColorModeValue('blue.700', 'gray.600');

  return (
    <Button
      as={RouterNavLink}
      to={to}
      variant="ghost"
      _activeLink={{ bg: activeBg, color: 'white' }}
      _hover={{ bg: hoverBg }}
      color="currentColor"
      px={{ base: 2, md: 4 }} // Smaller padding on small screens
      fontSize={{ base: 'sm', md: 'md' }} // Smaller font size on small screens
      _focus={{ boxShadow: 'none' }} // Remove focus box shadow
    >
      {children}
    </Button>
  );
};

export default NavButton;
