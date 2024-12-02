const Devolucion = require('../models/Devolucion');

// Crear una nueva devolución
exports.createDevolucion = async (req, res) => {
  try {
    const { motivo } = req.body;
    const nuevaDevolucion = await Devolucion.create({
      motivo
    });
    res.status(201).json(nuevaDevolucion);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la devolución', error });
  }
};

// Obtener todas las devoluciones
exports.getDevoluciones = async (req, res) => {
  try {
    const devoluciones = await Devolucion.findAll();
    res.status(200).json(devoluciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las devoluciones', error });
  }
};

// Obtener una devolución por su id
exports.getDevolucionById = async (req, res) => {
  try {
    const devolucion = await Devolucion.findByPk(req.params.id);
    if (!devolucion) {
      return res.status(404).json({ message: 'Devolución no encontrada' });
    }
    res.status(200).json(devolucion);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la devolución', error });
  }
};

// Actualizar una devolución
exports.updateDevolucion = async (req, res) => {
  try {
    const { id } = req.params;
    const { motivo } = req.body;

    const devolucion = await Devolucion.findByPk(id);
    if (!devolucion) {
      return res.status(404).json({ message: 'Devolución no encontrada' });
    }

    devolucion.motivo = motivo || devolucion.motivo;

    await devolucion.save();
    res.status(200).json(devolucion);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la devolución', error });
  }
};

// Eliminar una devolución
exports.deleteDevolucion = async (req, res) => {
  try {
    const { id } = req.params;
    const devolucion = await Devolucion.findByPk(id);
    if (!devolucion) {
      return res.status(404).json({ message: 'Devolución no encontrada' });
    }

    await devolucion.destroy();
    res.status(204).json({ message: 'Devolución eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la devolución', error });
  }
};
