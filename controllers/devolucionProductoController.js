const DevolucionProducto = require('../models/DevolucionProducto');

// Crear una nueva devolución de producto
exports.createDevolucionProducto = async (req, res) => {
  try {
    const { id_devolucion, codigo_producto, valor_compra, valor_venta } = req.body;
    const nuevaDevolucionProducto = await DevolucionProducto.create({
      id_devolucion,
      codigo_producto,
      valor_compra,
      valor_venta
    });
    res.status(201).json(nuevaDevolucionProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la devolución de producto', error });
  }
};

// Obtener todas las devoluciones de productos
exports.getDevolucionesProductos = async (req, res) => {
  try {
    const devolucionesProductos = await DevolucionProducto.findAll();
    res.status(200).json(devolucionesProductos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las devoluciones de productos', error });
  }
};

// Obtener una devolución de producto por su id
exports.getDevolucionProductoById = async (req, res) => {
  try {
    const devolucionProducto = await DevolucionProducto.findByPk(req.params.id);
    if (!devolucionProducto) {
      return res.status(404).json({ message: 'Devolución de producto no encontrada' });
    }
    res.status(200).json(devolucionProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la devolución de producto', error });
  }
};

// Actualizar una devolución de producto
exports.updateDevolucionProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_devolucion, codigo_producto, valor_compra, valor_venta } = req.body;
    const devolucionProducto = await DevolucionProducto.findByPk(id);
    if (!devolucionProducto) {
      return res.status(404).json({ message: 'Devolución de producto no encontrada' });
    }

    devolucionProducto.id_devolucion = id_devolucion || devolucionProducto.id_devolucion;
    devolucionProducto.codigo_producto = codigo_producto || devolucionProducto.codigo_producto;
    devolucionProducto.valor_compra = valor_compra || devolucionProducto.valor_compra;
    devolucionProducto.valor_venta = valor_venta || devolucionProducto.valor_venta;

    await devolucionProducto.save();
    res.status(200).json(devolucionProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la devolución de producto', error });
  }
};

// Eliminar una devolución de producto
exports.deleteDevolucionProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const devolucionProducto = await DevolucionProducto.findByPk(id);
    if (!devolucionProducto) {
      return res.status(404).json({ message: 'Devolución de producto no encontrada' });
    }
    await devolucionProducto.destroy();
    res.status(204).json({ message: 'Devolución de producto eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la devolución de producto', error });
  }
};
