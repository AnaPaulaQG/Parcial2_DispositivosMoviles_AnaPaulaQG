import { useState } from 'react';
import type { Producto, FormaPago, ItemCarrito } from '../types/producto';

export const useCarrito = () => {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);
  const [formaPago, setFormaPago] = useState<FormaPago>('efectivo');

  const agregarAlCarrito = (producto: Producto): void => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.producto.id === producto.id);
      if (existe) {
        // Si ya está en el carrito, suma 1 a la cantidad (sin superar el stock)
        return prevCarrito.map((item) =>
          item.producto.id === producto.id && item.cantidad < producto.stock
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      // Si no está, lo agrega con cantidad 1
      return [...prevCarrito, { producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (productoId: number): void => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((item) => item.producto.id !== productoId)
    );
  };

  const cambiarFormaPago = (nuevaFormaPago: FormaPago): void => {
    setFormaPago(nuevaFormaPago);
  };

  // Calcula el total multiplicando precio por cantidad
  const total: number = carrito.reduce(
    (acumulador, item) => acumulador + item.producto.precio * item.cantidad,
    0
  );

  // Calcula la cantidad total de prendas en el carrito (para el Header)
  const cantidadTotalItems: number = carrito.reduce(
    (acumulador, item) => acumulador + item.cantidad,
    0
  );

  return {
    carrito,
    formaPago,
    total,
    cantidadTotalItems,
    agregarAlCarrito,
    eliminarDelCarrito,
    cambiarFormaPago,
  };
};