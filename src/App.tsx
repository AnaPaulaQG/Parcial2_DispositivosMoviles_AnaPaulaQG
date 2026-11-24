import { useState } from 'react';
import type { Producto } from './types/producto';
import { productosMock, formasDePago } from './data/mockData';
import { useCarrito } from './hooks/useCarrito';
import { Header } from './components/Header';
import { FilterPanel } from './components/FilterPanel';
import { ProductList } from './components/ProductList';
import { CartSummary } from './components/CartSummary';

export function App() {
  // 1. Estado tipado para la lista de productos
  const [productos] = useState<Producto[]>(productosMock);

  // 2. Dos estados tipados para el filtrado en tiempo real
  const [busqueda, setBusqueda] = useState<string>('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todas');

  // 3. Hook personalizado con el estado y lógica del carrito
  const {
    carrito,
    formaPago,
    total,
    cantidadTotalItems,
    agregarAlCarrito,
    eliminarDelCarrito,
    cambiarFormaPago,
  } = useCarrito();

  // Obtener categorías únicas dinámicamente desde tus productos
  const categorias: string[] = Array.from(
    new Set(productos.map((prod) => prod.categoria))
  );

  // Filtrar productos en tiempo real según texto y categoría
  const productosFiltrados: Producto[] = productos.filter((prod) => {
    const coincideTexto =
      prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      prod.descripcion.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriaSeleccionada === 'Todas' ||
      prod.categoria === categoriaSeleccionada;

    return coincideTexto && coincideCategoria;
  });

  return (
    <div>
      <Header cantidadItems={cantidadTotalItems} />

      <main>
        <FilterPanel
          busqueda={busqueda}
          categoriaSeleccionada={categoriaSeleccionada}
          categorias={categorias}
          onBusquedaChange={setBusqueda}
          onCategoriaChange={setCategoriaSeleccionada}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', alignItems: 'start' }}>
          <ProductList
            productos={productosFiltrados}
            onAgregarAlCarrito={agregarAlCarrito}
          />

          <CartSummary
            carrito={carrito}
            total={total}
            formaPago={formaPago}
            formasDePago={formasDePago}
            onEliminar={eliminarDelCarrito}
            onFormaPagoChange={cambiarFormaPago}
          />
        </div>
      </main>
    </div>
  );
}

export default App;