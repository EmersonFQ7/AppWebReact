// Archivo actualizado: entityService.js (verificación de cambios en Git)

import api from './api'; // Conexión base a la API

export const pokemonService = {
  // 🔹 Lista de pokémon con paginación
  getPokemons: async (offset = 0, limit = 20) => {
    const response = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
    return response.data;
  },

  // 🔹 Datos de un pokémon por ID
  getPokemon: async (id) => {
    const response = await api.get(`/pokemon/${id}`);
    return response.data;
  },

  // 🔹 Lista de pokémon populares (los primeros 6)
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

  // 🔹 Búsqueda de pokémon por nombre
  searchPokemons: async (name) => {
    try {
      const response = await api.get(`/pokemon/${name.toLowerCase()}`);
      return response.data;
    } catch (error) {
      return null;
    }
  },
};

// 🔚 Fin del archivo
