const ErrorAlert = ({ message, onRetry }) => {
  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
      <i className="fas fa-exclamation-triangle me-2"></i>
      <div className="flex-grow-1">
        {message}
      </div>
      {onRetry && (
        <button 
          className="btn btn-outline-danger btn-sm ms-2"
          onClick={onRetry}
        >
          Reintentar
        </button>
      )}
    </div>
  );
};

export default ErrorAlert;