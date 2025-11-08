import { useState, useEffect } from 'react';
import { pokemonService } from '../services/entityService';


export const useEntities = (page = 1, limit = 20, search = '') => {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);


  useEffect(() => {
    const fetchEntities = async () => {
      try {
        setLoading(true);
        setError(null);


        // ============================
        // CAMBIO 1: Si hay búsqueda, obtener todos los Pokémon y filtrar
        // ============================
        if (search) {
          // Obtener todos los Pokémon (puedes ajustar el límite si la API permite)
          const data = await pokemonService.getPokemons(0, 1000); // Ajusta el máximo si es necesario
         
          // Filtrar por nombre
          const filtered = data.results.filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase())
          );


          // Obtener detalles completos de los Pokémon filtrados
          const paginated = filtered.slice((page - 1) * limit, page * limit);
          const pokemonsWithDetails = await Promise.all(
            paginated.map(async (pokemon) => {
              const response = await fetch(pokemon.url);
              return response.json();
            })
          );


          setEntities(pokemonsWithDetails);
          setTotalCount(filtered.length); // Total de resultados filtrados
        } else {
          // ============================
          // CAMBIO 2: Paginación normal desde la API
          // ============================
          const offset = (page - 1) * limit;
          const data = await pokemonService.getPokemons(offset, limit);


          const pokemonsWithDetails = await Promise.all(
            data.results.map(async (pokemon) => {
              const response = await fetch(pokemon.url);
              return response.json();
            })
          );


          setEntities(pokemonsWithDetails);
          setTotalCount(data.count);
        }
      } catch (err) {
        setError('Error al cargar los pokémons');
        console.error('Error fetching entities:', err);
      } finally {
        setLoading(false);
      }
    };


    fetchEntities();
  }, [page, limit, search]);


  return { entities, loading, error, totalCount };
};


