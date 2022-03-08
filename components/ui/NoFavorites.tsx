import { Container, Image, Text } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <Container className="favorites-container">
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="favorite"
        width={250}
        height={250}
        className="favorites-image"
      />
    </Container>
  );
};
