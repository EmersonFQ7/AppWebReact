import { useState, useEffect } from 'react';

const FilterBar = ({ onSearch, onLimitChange, currentLimit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, onSearch]);

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="filter-bar bg-light p-4 rounded shadow-sm mb-4">
      <div className="row g-3 align-items-end">
        <div className="col-md-6">
          <label htmlFor="search" className="form-label fw-semibold">
            Buscar Pokémon
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Escribe el nombre de un Pokémon..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleClear}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>

        <div className="col-md-3">
          <label htmlFor="limit" className="form-label fw-semibold">
            Pokémons por página
          </label>
          <select
            className="form-select"
            id="limit"
            value={currentLimit}
            onChange={(e) => onLimitChange(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="col-md-3">
          <div className="d-grid">
            <button
              className="btn btn-outline-secondary"
              onClick={handleClear}
              disabled={!searchTerm}
            >
              <i className="fas fa-eraser me-2"></i>
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;