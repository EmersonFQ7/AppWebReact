import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section bg-gradient-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              Bienvenido a la PokéApp
            </h1>
            <p className="lead mb-4">
              Descubre y explora el fascinante mundo de los Pokémon. 
              Encuentra información detallada de tus Pokémon favoritos, 
              sus habilidades, tipos y mucho más.
            </p>
            <Link to="/lista" className="btn btn-light btn-lg">
              <i className="fas fa-search me-2"></i>
              Explorar Pokédex
            </Link>
          </div>
          <div className="col-lg-6 text-center">
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
              alt="Pikachu" 
              className="img-fluid hero-pokemon"
              style={{ maxWidth: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Agregar estos estilos en tu CSS global
const styles = `
.hero-section {
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
}

.hero-pokemon {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
`;