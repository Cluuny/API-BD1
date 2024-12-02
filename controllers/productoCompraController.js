const ProductoCompra = require('../models/ProductoCompra');

// Crear una nueva relación entre producto y compra
exports.createProductoCompra = async (req, res) => {
  try {
    const { codigo_producto, id_compra } = req.body;
    const nuevoProductoCompra = await ProductoCompra.create({
      codigo_producto,
      id_compra,
    });
    res.status(201).json(nuevoProductoCompra);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la relación entre producto y compra', error });
  }
};

// Obtener todas las relaciones entre productos y compras
exports.getProductosCompras = async (req, res) => {
  try {
    const productosCompras = await ProductoCompra.findAll();
    res.status(200).json(productosCompras);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las relaciones entre productos y compras', error });
  }
};

// Obtener una relación entre producto y compra por sus id
exports.getProductoCompraById = async (req, res) => {
  try {
    const { codigo_producto, id_compra } = req.params;
    const productoCompra = await ProductoCompra.findOne({
      where: {
        codigo_producto,
        id_compra
      }
    });
    if (!productoCompra) {
      return res.status(404).json({ message: 'Relación entre producto y compra no encontrada' });
    }
    res.status(200).json(productoCompra);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la relación entre producto y compra', error });
  }
};

// Eliminar una relación entre producto y compra
exports.deleteProductoCompra = async (req, res) => {
  try {
    const { codigo_producto, id_compra } = req.params;
    const productoCompra = await ProductoCompra.findOne({
      where: {
        codigo_producto,
        id_compra
      }
    });
    if (!productoCompra) {
      return res.status(404).json({ message: 'Relación entre producto y compra no encontrada' });
    }
    await productoCompra.destroy();
    res.status(204).json({ message: 'Relación entre producto y compra eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la relación entre producto y compra', error });
  }
};
