const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>PokéApp</h5>
            <p>Explora el maravilloso mundo de los Pokémon</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p>&copy; 2024 PokéApp. Todos los derechos reservados.</p>
            <p>Datos proporcionados por PokéAPI</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;