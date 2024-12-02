const Producto = require('../models/Productos');

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
  try {
    const { id_persona, valor_compra, valor_venta, descripcion_producto, nombre_producto, cantidad_producto } = req.body;
    const nuevoProducto = await Producto.create({
      id_persona,
      valor_compra,
      valor_venta,
      descripcion_producto,
      nombre_producto,
      cantidad_producto
    });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto', error });
  }
};

// Obtener todos los productos
exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

// Obtener un producto por su id
exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto', error });
  }
};

// Actualizar un producto
exports.updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { valor_compra, valor_venta, descripcion_producto, nombre_producto, cantidad_producto } = req.body;
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    producto.valor_compra = valor_compra || producto.valor_compra;
    producto.valor_venta = valor_venta || producto.valor_venta;
    producto.descripcion_producto = descripcion_producto || producto.descripcion_producto;
    producto.nombre_producto = nombre_producto || producto.nombre_producto;
    producto.cantidad_producto = cantidad_producto || producto.cantidad_producto;

    await producto.save();
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto', error });
  }
};

// Eliminar un producto
exports.deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    await producto.destroy();
    res.status(204).json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error });
  }
};
