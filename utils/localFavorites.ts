const getPokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

const toggleFavorite = (id: number) => {
  let favorites: number[] = getPokemons();

  if (favorites.includes(id)) {
    favorites = favorites.filter((item) => item !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites: number[] = getPokemons();
  return favorites.includes(id);
};

export default { toggleFavorite, isInFavorites, getPokemons };
