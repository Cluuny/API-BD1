// controllers/ofertaController.js
const Oferta = require('../models/Oferta'); // Asegúrate de importar el modelo Oferta

// Crear una nueva oferta
exports.createOferta = async (req, res) => {
  try {
    const { id_proveedor, precio, codigo_producto } = req.body;
    const nuevaOferta = await Oferta.create({
      id_proveedor,
      precio,
      codigo_producto
    });
    res.status(201).json(nuevaOferta);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la oferta', error });
  }
};

// Obtener todas las ofertas
exports.getOfertas = async (req, res) => {
  try {
    const ofertas = await Oferta.findAll();
    res.status(200).json(ofertas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las ofertas', error });
  }
};

// Obtener una oferta por su id_proveedor y codigo_producto
exports.getOfertaById = async (req, res) => {
  try {
    const { id_proveedor, codigo_producto } = req.params;
    const oferta = await Oferta.findOne({
      where: {
        id_proveedor,
        codigo_producto
      }
    });

    if (!oferta) {
      return res.status(404).json({ message: 'Oferta no encontrada' });
    }
    res.status(200).json(oferta);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la oferta', error });
  }
};

// Actualizar una oferta
exports.updateOferta = async (req, res) => {
  try {
    const { id_proveedor, codigo_producto } = req.params;
    const { precio } = req.body;

    const oferta = await Oferta.findOne({
      where: {
        id_proveedor,
        codigo_producto
      }
    });

    if (!oferta) {
      return res.status(404).json({ message: 'Oferta no encontrada' });
    }

    oferta.precio = precio || oferta.precio;

    await oferta.save();
    res.status(200).json(oferta);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la oferta', error });
  }
};

// Eliminar una oferta
exports.deleteOferta = async (req, res) => {
  try {
    const { id_proveedor, codigo_producto } = req.params;
    const oferta = await Oferta.findOne({
      where: {
        id_proveedor,
        codigo_producto
      }
    });

    if (!oferta) {
      return res.status(404).json({ message: 'Oferta no encontrada' });
    }

    await oferta.destroy();
    res.status(204).json({ message: 'Oferta eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la oferta', error });
  }
};
