const EntityCard = ({ entity }) => {
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

  const getStatColor = (statName) => {
    const statColors = {
      hp: '#FF5959',
      attack: '#F5AC78',
      defense: '#FAE078',
      'special-attack': '#9DB7F5',
      'special-defense': '#A7DB8D',
      speed: '#FA92B2'
    };
    return statColors[statName] || '#68A090';
  };

  return (
    <div className="card h-100 shadow-sm hover-card">
      <div className="card-header bg-transparent border-0 text-center">
        <small className="text-muted">
          # {entity.id.toString().padStart(3, '0')}
        </small>
      </div>
      
      <img 
        src={entity.sprites.other['official-artwork'].front_default} 
        className="card-img-top px-3" 
        alt={entity.name}
        style={{ height: '200px', objectFit: 'contain' }}
      />
      
      <div className="card-body text-center">
        <h5 className="card-title text-capitalize mb-3">
          {entity.name}
        </h5>
        
        <div className="d-flex justify-content-center gap-2 mb-3">
          {entity.types.map((typeInfo) => (
            <span 
              key={typeInfo.type.name}
              className="badge fw-normal"
              style={{ 
                backgroundColor: getTypeColor(typeInfo.type.name),
                color: 'white'
              }}
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>

        <div className="stats-section">
          <h6 className="mb-2">Estadísticas Base:</h6>
          <div className="row g-1">
            {entity.stats.slice(0, 3).map((stat) => (
              <div key={stat.stat.name} className="col-6">
                <small className="text-muted d-block">
                  {stat.stat.name === 'hp' ? 'HP' : 
                   stat.stat.name === 'attack' ? 'ATK' :
                   stat.stat.name === 'defense' ? 'DEF' : 
                   stat.stat.name === 'special-attack' ? 'SP. ATK' :
                   stat.stat.name === 'special-defense' ? 'SP. DEF' : 'SPD'}
                </small>
                <div className="progress" style={{ height: '8px' }}>
                  <div 
                    className="progress-bar"
                    style={{ 
                      width: `${Math.min(100, (stat.base_stat / 255) * 100)}%`,
                      backgroundColor: getStatColor(stat.stat.name)
                    }}
                  ></div>
                </div>
                <small className="fw-bold">{stat.base_stat}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="card-footer bg-transparent border-0">
        <div className="row text-center text-muted">
          <div className="col-6">
            <small>Peso: {entity.weight / 10} kg</small>
          </div>
          <div className="col-6">
            <small>Altura: {entity.height / 10} m</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityCard;