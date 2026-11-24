interface FilterPanelProps {
  busqueda: string;
  categoriaSeleccionada: string;
  categorias: string[];
  onBusquedaChange: (valor: string) => void;
  onCategoriaChange: (categoria: string) => void;
}

export const FilterPanel = ({
  busqueda,
  categoriaSeleccionada,
  categorias,
  onBusquedaChange,
  onCategoriaChange,
}: FilterPanelProps) => {
  return (
    <section style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <input
        type="text"
        placeholder="Buscar prenda..."
        value={busqueda}
        onChange={(e) => onBusquedaChange(e.target.value)}
      />

      <select
        value={categoriaSeleccionada}
        onChange={(e) => onCategoriaChange(e.target.value)}
      >
        <option value="Todas">Todas las categorías</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </section>
  );
};