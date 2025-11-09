import api from './api';

export const pokemonService = {
  // Obtener lista de pokémons con paginación
  getPokemons: async (offset = 0, limit = 20) => {
    const response = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
    return response.data;
  },

  // Obtener detalles de un pokémon específico
  getPokemon: async (id) => {
    const response = await api.get(`/pokemon/${id}`);
    return response.data;
  },

  // Obtener pokémons populares (primeros 6)
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

  // Buscar pokémons por nombre
  searchPokemons: async (name) => {
    try {
      const response = await api.get(`/pokemon/${name.toLowerCase()}`);
      return response.data;
    } catch (error) {
      return null;
    }
  },
};