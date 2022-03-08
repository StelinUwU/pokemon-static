import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link } from '@nextui-org/react';
import { useTheme, Text, Spacer } from '@nextui-org/react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{ backgroundColor: theme?.colors.gray900.value }}
      className="navbar-container"
    >
      <NextLink href="/" passHref>
        <Link>
          <Image
            src={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            }
            alt="App icon"
            width={70}
            height={70}
          />
        </Link>
      </NextLink>
      <Text className="navbar-text" h2>
        P
      </Text>
      <Text className="navbar-text">okémon</Text>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text className="navbar-text">Favorites</Text>
        </Link>
      </NextLink>
    </div>
  );
};
