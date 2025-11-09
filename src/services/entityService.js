import api from './api';


export const pokemonService = {

  getPokemons: async (offset = 0, limit = 20) => {
    const response = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
    return response.data;
  },


  getPokemon: async (id) => {
    const response = await api.get(`/pokemon/${id}`);
    return response.data;
  },


  getPopularPokemons: async () => {
    const response = await api.get('/pokemon?limit=6');
    const popularPokemons = await Promise.all(
      response.data.results.map(async (pokemon, index) => {
        const details = await pokemonService.getPokemon(index + 1);
        return details;
      })
    );
    return popularPokemons;
  },


  searchPokemons: async (name) => {
    try {
      const response = await api.get(`/pokemon/${name.toLowerCase()}`);
      return response.data;
    } catch (error) {
      return null;
    }
  },
};
