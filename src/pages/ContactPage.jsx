import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="contact-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold mb-3">Contáctanos</h1>
              <p className="lead text-muted">
                ¿Tienes preguntas sobre Pokémon? ¿Sugerencias para mejorar nuestra app? 
                ¡Nos encantaría escucharte!
              </p>
            </div>

            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <div className="row mb-4">
                  <div className="col-md-6 text-center mb-3">
                    <div className="contact-info-item">
                      <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
                      <h5>Email</h5>
                      <p className="text-muted">info@pokeapp.com</p>
                    </div>
                  </div>
                  <div className="col-md-6 text-center mb-3">
                    <div className="contact-info-item">
                      <i className="fas fa-phone fa-2x text-primary mb-3"></i>
                      <h5>Teléfono</h5>
                      <p className="text-muted">+1 (555) 123-POKE</p>
                    </div>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12">
                <div className="bg-light p-4 rounded">
                  <h4 className="mb-3">¿Por qué contactarnos?</h4>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-bug text-success me-3"></i>
                        <span>Reportar errores</span>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-lightbulb text-warning me-3"></i>
                        <span>Sugerencias</span>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-heart text-danger me-3"></i>
                        <span>Comentarios</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;