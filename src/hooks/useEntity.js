import { useState, useEffect } from 'react';
import { pokemonService } from '../services/entityService';


export const useEntity = (id) => {
  const [entity, setEntity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchEntity = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await pokemonService.getPokemon(id);
        setEntity(data);
      } catch (err) {
        setError('Error al cargar el pokémon');
        console.error('Error fetching entity:', err);
      } finally {
        setLoading(false);
      }
    };


    if (id) {
      fetchEntity();
    }
  }, [id]);


  return { entity, loading, error };
};
