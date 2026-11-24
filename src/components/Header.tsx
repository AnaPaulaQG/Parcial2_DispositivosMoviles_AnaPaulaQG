interface HeaderProps {
  cantidadItems: number;
}

export const Header = ({ cantidadItems }: HeaderProps) => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <h1>Tienda de Ropa</h1>
      <div>
        <span>🛒 Carrito: <strong>{cantidadItems}</strong> productos</span>
      </div>
    </header>
  );
};