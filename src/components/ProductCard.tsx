import type { Producto } from '../types/producto';

interface ProductCardProps {
  producto: Producto;
  onAgregarAlCarrito: (producto: Producto) => void;
}

export const ProductCard = ({ producto, onAgregarAlCarrito }: ProductCardProps) => {
  return (
    <article style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
      <h3>{producto.nombre}</h3>
      <p><strong>Categoría:</strong> {producto.categoria}</p>
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock} unidades</p>
      <button
        onClick={() => onAgregarAlCarrito(producto)}
        disabled={producto.stock === 0}
      >
        {producto.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
    </article>
  );
};