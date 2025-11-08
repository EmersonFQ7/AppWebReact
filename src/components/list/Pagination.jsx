const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  totalItems,
  itemsPerPage 
}) => {
  const maxVisiblePages = 5;
  
  const getVisiblePages = () => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);
    
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
      <div className="pagination-info">
        <small className="text-muted">
          Mostrando {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} de {totalItems} pokémons
        </small>
      </div>
      
      <nav aria-label="Pagination">
        <ul className="pagination mb-0">
          {/* Botón Anterior */}
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <i className="fas fa-chevron-left me-1"></i>
              Anterior
            </button>
          </li>

          {/* Primera página */}
          {getVisiblePages()[0] > 1 && (
            <>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => onPageChange(1)}
                >
                  1
                </button>
              </li>
              {getVisiblePages()[0] > 2 && (
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
              )}
            </>
          )}

          {/* Páginas visibles */}
          {getVisiblePages().map(page => (
            <li 
              key={page} 
              className={`page-item ${currentPage === page ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}

          {/* Última página */}
          {getVisiblePages()[getVisiblePages().length - 1] < totalPages && (
            <>
              {getVisiblePages()[getVisiblePages().length - 1] < totalPages - 1 && (
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
              )}
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => onPageChange(totalPages)}
                >
                  {totalPages}
                </button>
              </li>
            </>
          )}

          {/* Botón Siguiente */}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Siguiente
              <i className="fas fa-chevron-right ms-1"></i>
            </button>
          </li>
        </ul>
      </nav>
      
      <div className="pagination-info">
        <small className="text-muted">
          Página {currentPage} de {totalPages}
        </small>
      </div>
    </div>
  );
};

export default Pagination;