import type { Producto, FormaPago } from '../types/producto';

interface CartSummaryProps {
  carrito: ItemCarrito[];
  total: number;
  formaPago: FormaPago;
  formasDePago: FormaPago[];
  onEliminar: (index: number) => void;
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
            {carrito.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                {item.nombre} - ${item.precio}{' '}
                <button onClick={() => onEliminar(index)}>Quitar</button>
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