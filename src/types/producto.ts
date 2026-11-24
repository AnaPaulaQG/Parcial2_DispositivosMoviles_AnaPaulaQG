export type FormaPago = 'efectivo' | 'tarjeta de credito' | 'tarjeta de debito';

export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  descripcion: string;
}