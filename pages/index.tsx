import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';
import { Layout } from '@components/layouts';
import { PokemonListResponse, SmallPokemon } from '@interfaces';
import { PokemonCard } from '@components/pokemon';
import pokeApi from '@api/pokeApi';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemons list">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
      asf
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    id: i + 1,
    name: pokemon.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
    url: pokemon.url,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
