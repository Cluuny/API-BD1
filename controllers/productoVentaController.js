const ProductoVenta = require('../models/ProductoVenta');

// Crear una nueva entrada en Productos_Ventas
exports.createProductoVenta = async (req, res) => {
  try {
    const { codigo_producto, id_venta, valor_venta, cantidad_producto } = req.body;
    const nuevaProductoVenta = await ProductoVenta.create({
      codigo_producto,
      id_venta,
      valor_venta,
      cantidad_producto
    });
    res.status(201).json(nuevaProductoVenta);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la venta de producto', error });
  }
};

// Obtener todos los productos vendidos
exports.getProductoVentas = async (req, res) => {
  try {
    const productoVentas = await ProductoVenta.findAll();
    res.status(200).json(productoVentas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las ventas de productos', error });
  }
};

// Obtener una venta de producto por su id
exports.getProductoVentaById = async (req, res) => {
  try {
    const productoVenta = await ProductoVenta.findByPk(req.params.id);
    if (!productoVenta) {
      return res.status(404).json({ message: 'Venta de producto no encontrada' });
    }
    res.status(200).json(productoVenta);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la venta de producto', error });
  }
};

// Actualizar una venta de producto
exports.updateProductoVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const { codigo_producto, id_venta, valor_venta, cantidad_producto } = req.body;
    const productoVenta = await ProductoVenta.findByPk(id);
    if (!productoVenta) {
      return res.status(404).json({ message: 'Venta de producto no encontrada' });
    }

    productoVenta.codigo_producto = codigo_producto || productoVenta.codigo_producto;
    productoVenta.id_venta = id_venta || productoVenta.id_venta;
    productoVenta.valor_venta = valor_venta || productoVenta.valor_venta;
    productoVenta.cantidad_producto = cantidad_producto || productoVenta.cantidad_producto;

    await productoVenta.save();
    res.status(200).json(productoVenta);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la venta de producto', error });
  }
};

// Eliminar una venta de producto
exports.deleteProductoVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const productoVenta = await ProductoVenta.findByPk(id);
    if (!productoVenta) {
      return res.status(404).json({ message: 'Venta de producto no encontrada' });
    }
    await productoVenta.destroy();
    res.status(204).json({ message: 'Venta de producto eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la venta de producto', error });
  }
};
