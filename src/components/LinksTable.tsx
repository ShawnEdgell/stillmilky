import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Link, useColorModeValue } from '@chakra-ui/react';

const LinksTable: React.FC = () => {
  const tableBg = useColorModeValue('gray.100', 'gray.900');
  const tableColor = useColorModeValue('black', 'white');
  const linkColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Table variant="striped" colorScheme="blue" bg={tableBg} color={tableColor}>
      <Thead>
        <Tr>
          <Th>Site</Th>
          <Th>URL</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>YouTube</Td>
          <Td>
            <Link href="https://www.youtube.com/channel/UC7361pUdOT7EKWp-K6awlGw" isExternal color={linkColor}>
              https://www.youtube.com/channel/UC7361pUdOT7EKWp-K6awlGw
            </Link>
          </Td>
        </Tr>
        <Tr>
          <Td>Twitch</Td>
          <Td>
            <Link href="https://www.twitch.tv/stillmilky" isExternal color={linkColor}>
              https://www.twitch.tv/stillmilky
            </Link>
          </Td>
        </Tr>
        <Tr>
          <Td>Instagram</Td>
          <Td>
            <Link href="https://www.instagram.com/stillmilky" isExternal color={linkColor}>
              https://www.instagram.com/stillmilky
            </Link>
          </Td>
        </Tr>
        <Tr>
          <Td>TikTok</Td>
          <Td>
            <Link href="https://www.tiktok.com/@iamstillmilky" isExternal color={linkColor}>
              https://www.tiktok.com/@iamstillmilky
            </Link>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default LinksTable;
