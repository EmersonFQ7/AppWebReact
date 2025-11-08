const LoadingSpinner = ({ size = 'md' }) => {
  const sizes = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg'
  };

  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className={`spinner-border text-primary ${sizes[size]}`} role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      <span className="ms-2">Cargando...</span>
    </div>
  );
};

export default LoadingSpinner;