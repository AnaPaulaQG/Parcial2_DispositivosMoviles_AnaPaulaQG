import type { ItemCarrito, FormaPago } from '../types/producto';

interface CartSummaryProps {
  carrito: ItemCarrito[];
  total: number;
  formaPago: FormaPago;
  formasDePago: FormaPago[];
  onEliminar: (productoId: number) => void;
  onFormaPagoChange: (pago: FormaPago) => void;
}

export const CartSummary = ({
  carrito,
  total,
  formaPago,
  formasDePago,
  onEliminar,
  onFormaPagoChange,
}: CartSummaryProps) => {
  return (
    <aside style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h2>Resumen de Compra</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {carrito.map((item) => (
              <li key={item.producto.id}>
                {item.producto.nombre} (x{item.cantidad}) - ${item.producto.precio * item.cantidad}{' '}
                <button onClick={() => onEliminar(item.producto.id)}>Quitar</button>
              </li>
            ))}
          </ul>

          <div>
            <label htmlFor="pago">Forma de pago: </label>
            <select
              id="pago"
              value={formaPago}
              onChange={(e) => onFormaPagoChange(e.target.value as FormaPago)}
            >
              {formasDePago.map((fp) => (
                <option key={fp} value={fp}>
                  {fp}
                </option>
              ))}
            </select>
          </div>

          <h3>Total: ${total}</h3>
        </>
      )}
    </aside>
  );
};