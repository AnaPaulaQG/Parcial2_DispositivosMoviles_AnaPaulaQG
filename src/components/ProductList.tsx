import type { Producto } from '../types/producto';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  productos: Producto[];
  onAgregarAlCarrito: (producto: Producto) => void;
}

export const ProductList = ({ productos, onAgregarAlCarrito }: ProductListProps) => {
  if (productos.length === 0) {
    return <p>No se encontraron prendas con esos filtros.</p>;
  }

  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', padding: '1rem' }}>
      {productos.map((prod) => (
        <ProductCard
          key={prod.id}
          producto={prod}
          onAgregarAlCarrito={onAgregarAlCarrito}
        />
      ))}
    </section>
  );
};