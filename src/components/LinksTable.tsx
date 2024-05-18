import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Link } from '@chakra-ui/react';

const LinksTable: React.FC = () => (
  <Table variant="striped" colorScheme="blue">
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
          <Link href="https://www.youtube.com/channel/UC7361pUdOT7EKWp-K6awlGw" isExternal color="blue.500">
            https://www.youtube.com/channel/UC7361pUdOT7EKWp-K6awlGw
          </Link>
        </Td>
      </Tr>
      <Tr>
        <Td>Twitch</Td>
        <Td>
          <Link href="https://www.twitch.tv/stillmilky" isExternal color="blue.500">
            https://www.twitch.tv/stillmilky
          </Link>
        </Td>
      </Tr>
      <Tr>
        <Td>Instagram</Td>
        <Td>
          <Link href="https://www.instagram.com/stillmilky" isExternal color="blue.500">
            https://www.instagram.com/stillmilky
          </Link>
        </Td>
      </Tr>
      <Tr>
        <Td>TikTok</Td>
        <Td>
          <Link href="https://www.tiktok.com/@iamstillmilky" isExternal color="blue.500">
            https://www.tiktok.com/@iamstillmilky
          </Link>
        </Td>
      </Tr>
    </Tbody>
  </Table>
);

export default LinksTable;
