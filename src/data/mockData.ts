import { Producto, FormaPago } from '../types/producto';

export const productosMock: Producto[] = [
  {
    id: 1,
    nombre: 'Remera Básica de Algodón',
    categoria: 'Remeras',
    precio: 15000,
    stock: 20,
    descripcion: 'Remera cuello redondo 100% algodón peinado, corte clásico.'
  },
  {
    id: 2,
    nombre: 'Jean Slim Fit Azul',
    categoria: 'Pantalones',
    precio: 45000,
    stock: 12,
    descripcion: 'Pantalón de denim elastizado color azul oscuro con cinco bolsillos.'
  },
  {
    id: 3,
    nombre: 'Campera de Cuero Ecológico',
    categoria: 'Abrigos',
    precio: 85000,
    stock: 5,
    descripcion: 'Campera estilo biker con cierres metálicos y forro interior.'
  },
  // ... completa aquí hasta llegar a 12 - 15 productos en total
];

export const formasDePago: FormaPago[] = [
  'efectivo',
  'tarjeta de credito',
  'tarjeta de debito'
];