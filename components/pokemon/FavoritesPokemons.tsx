import { Grid } from '@nextui-org/react';
import { FC } from 'react';
import { FavoriteCardPokemons } from './FavoriteCardPokemons';

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemons pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
