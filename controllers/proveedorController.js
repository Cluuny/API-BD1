const Proveedor = require('../models/Proovedor');

// Crear un nuevo proveedor
exports.createProveedor = async (req, res) => {
  try {
    const { id_tipo_proveedor, id_tipo_documento, telefono_contacto, nombre_proveedor } = req.body;
    const nuevoProveedor = await Proveedor.create({
      id_tipo_proveedor,
      id_tipo_documento,
      telefono_contacto,
      nombre_proveedor
    });
    res.status(201).json(nuevoProveedor);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el proveedor', error });
  }
};

// Obtener todos los proveedores
exports.getProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener proveedores', error });
  }
};

// Obtener un proveedor por su id
exports.getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.status(200).json(proveedor);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el proveedor', error });
  }
};

// Actualizar un proveedor
exports.updateProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_tipo_proveedor, id_tipo_documento, telefono_contacto, nombre_proveedor } = req.body;
    const proveedor = await Proveedor.findByPk(id);
    if (!proveedor) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }

    proveedor.id_tipo_proveedor = id_tipo_proveedor || proveedor.id_tipo_proveedor;
    proveedor.id_tipo_documento = id_tipo_documento || proveedor.id_tipo_documento;
    proveedor.telefono_contacto = telefono_contacto || proveedor.telefono_contacto;
    proveedor.nombre_proveedor = nombre_proveedor || proveedor.nombre_proveedor;

    await proveedor.save();
    res.status(200).json(proveedor);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el proveedor', error });
  }
};

// Eliminar un proveedor
exports.deleteProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const proveedor = await Proveedor.findByPk(id);
    if (!proveedor) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    await proveedor.destroy();
    res.status(204).json({ message: 'Proveedor eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el proveedor', error });
  }
};
