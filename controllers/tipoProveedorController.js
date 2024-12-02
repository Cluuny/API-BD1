const TipoProveedor = require('../models/TipoProovedor');

// Crear un nuevo tipo de proveedor
exports.createTipoProveedor = async (req, res) => {
  try {
    const { categoria_proveedor } = req.body;
    const nuevoTipoProveedor = await TipoProveedor.create({
      categoria_proveedor
    });
    res.status(201).json(nuevoTipoProveedor);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el tipo de proveedor', error });
  }
};

// Obtener todos los tipos de proveedores
exports.getTipoProveedores = async (req, res) => {
  try {
    const tipoProveedores = await TipoProveedor.findAll();
    res.status(200).json(tipoProveedores);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los tipos de proveedores', error });
  }
};

// Obtener un tipo de proveedor por su id
exports.getTipoProveedorById = async (req, res) => {
  try {
    const tipoProveedor = await TipoProveedor.findByPk(req.params.id);
    if (!tipoProveedor) {
      return res.status(404).json({ message: 'Tipo de proveedor no encontrado' });
    }
    res.status(200).json(tipoProveedor);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el tipo de proveedor', error });
  }
};

// Actualizar un tipo de proveedor
exports.updateTipoProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoria_proveedor } = req.body;
    const tipoProveedor = await TipoProveedor.findByPk(id);
    if (!tipoProveedor) {
      return res.status(404).json({ message: 'Tipo de proveedor no encontrado' });
    }

    tipoProveedor.categoria_proveedor = categoria_proveedor || tipoProveedor.categoria_proveedor;

    await tipoProveedor.save();
    res.status(200).json(tipoProveedor);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el tipo de proveedor', error });
  }
};

// Eliminar un tipo de proveedor
exports.deleteTipoProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoProveedor = await TipoProveedor.findByPk(id);
    if (!tipoProveedor) {
      return res.status(404).json({ message: 'Tipo de proveedor no encontrado' });
    }
    await tipoProveedor.destroy();
    res.status(204).json({ message: 'Tipo de proveedor eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el tipo de proveedor', error });
  }
};
