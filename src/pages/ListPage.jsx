import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEntities } from '../hooks/useEntities';
import FilterBar from '../components/list/FilterBar';
import EntityCard from '../components/list/EntityCard';
import Pagination from '../components/list/Pagination';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorAlert from '../components/common/ErrorAlert';

const ListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // ============================
  // CAMBIO 1: Manejar page, limit y search como estado local
  // Esto evita que la URL haga reset del componente al cambiar filtros/paginación
  // ============================
  const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get('limit')) || 20);
  const [search, setSearch] = useState(searchParams.get('search') || '');

  const { entities, loading, error, totalCount } = useEntities(page, limit, search);

  // ============================
  // CAMBIO 2: Sincronizar estado con la URL
  // Cada vez que cambien page, limit o search, actualizamos searchParams
  // ============================
  useEffect(() => {
    const newParams = new URLSearchParams();

    if (page !== 1) newParams.set('page', page);
    if (limit !== 20) newParams.set('limit', limit);
    if (search) newParams.set('search', search);

    setSearchParams(newParams);
  }, [page, limit, search, setSearchParams]);

  // ============================
  // CAMBIO 3: Actualizar estado en lugar de solo searchParams
  // ============================
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    setPage(1); // Reiniciar página al hacer búsqueda
  };

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setPage(1); // Reiniciar página al cambiar límite
  };

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="list-page py-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-4">Pokédex</h1>
            <p className="text-center text-muted mb-5">
              Explora todos los Pokémon existentes. Usa la búsqueda para encontrar Pokémon específicos.
            </p>
          </div>
        </div>

        <FilterBar 
          onSearch={handleSearch}
          onLimitChange={handleLimitChange}
          currentLimit={limit}
        />

        {error && (
          <ErrorAlert 
            message={error} 
            onRetry={() => window.location.reload()} 
          />
        )}

        {loading && <LoadingSpinner />}

        {!loading && !error && entities.length === 0 && (
          <div className="text-center py-5">
            <i className="fas fa-search fa-3x text-muted mb-3"></i>
            <h4>No se encontraron Pokémon</h4>
            <p className="text-muted">
              {search 
                ? `No hay resultados para "${search}". Intenta con otro nombre.` 
                : 'No hay Pokémon para mostrar.'}
            </p>
          </div>
        )}

        {!loading && entities.length > 0 && (
          <>
            <div className="row g-4 mb-5">
              {entities.map((pokemon) => (
                <div key={pokemon.id} className="col-sm-6 col-md-4 col-lg-3">
                  <EntityCard entity={pokemon} />
                </div>
              ))}
            </div>

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalItems={totalCount}
              itemsPerPage={limit}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ListPage;
