import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pokemonService } from '../../services/entityService';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorAlert from '../common/ErrorAlert';

const PopularSection = () => {
  const [popularPokemons, setPopularPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularPokemons = async () => {
      try {
        setLoading(true);
        const data = await pokemonService.getPopularPokemons();
        setPopularPokemons(data);
      } catch (err) {
        setError('Error al cargar pokémons populares');
      } finally {
        setLoading(false);
      }
    };

    fetchPopularPokemons();
  }, []);

  const getTypeColor = (type) => {
    const typeColors = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };
    return typeColors[type] || '#68A090';
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorAlert message={error} />;

  return (
    <section className="popular-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-5">Pokémons Populares</h2>
          </div>
        </div>
        
        <div className="row g-4">
          {popularPokemons.map((pokemon) => (
            <div key={pokemon.id} className="col-md-4 col-lg-2">
              <div className="card h-100 shadow-sm hover-card">
                <img 
                  src={pokemon.sprites.other['official-artwork'].front_default} 
                  className="card-img-top p-3" 
                  alt={pokemon.name}
                  style={{ height: '120px', objectFit: 'contain' }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title text-capitalize mb-2">
                    {pokemon.name}
                  </h6>
                  <div className="d-flex justify-content-center gap-1 mb-2">
                    {pokemon.types.map((typeInfo) => (
                      <span 
                        key={typeInfo.type.name}
                        className="badge"
                        style={{ 
                          backgroundColor: getTypeColor(typeInfo.type.name),
                          color: 'white',
                          fontSize: '0.7rem'
                        }}
                      >
                        {typeInfo.type.name}
                      </span>
                    ))}
                  </div>
                  <small className="text-muted">
                    # {pokemon.id.toString().padStart(3, '0')}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <Link to="/lista" className="btn btn-primary btn-lg">
              <i className="fas fa-list me-2"></i>
              Ver Todos los Pokémon
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;