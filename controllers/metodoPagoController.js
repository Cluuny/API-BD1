const MetodoPago = require('../models/MetodoPago');

// Crear un nuevo método de pago
exports.createMetodoPago = async (req, res) => {
  try {
    const { tipo_metodo_pago } = req.body;
    const nuevoMetodoPago = await MetodoPago.create({ tipo_metodo_pago });
    res.status(201).json(nuevoMetodoPago);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el método de pago', error });
  }
};

// Obtener todos los métodos de pago
exports.getMetodosPago = async (req, res) => {
  try {
    const metodosPago = await MetodoPago.findAll();
    res.status(200).json(metodosPago);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los métodos de pago', error });
  }
};

// Obtener un método de pago por su tipo
exports.getMetodoPagoById = async (req, res) => {
  try {
    const metodoPago = await MetodoPago.findByPk(req.params.tipo_metodo_pago);
    if (!metodoPago) {
      return res.status(404).json({ message: 'Método de pago no encontrado' });
    }
    res.status(200).json(metodoPago);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el método de pago', error });
  }
};

// Actualizar un método de pago
exports.updateMetodoPago = async (req, res) => {
  try {
    const { tipo_metodo_pago } = req.params;
    const { nuevo_tipo_metodo_pago } = req.body;

    const metodoPago = await MetodoPago.findByPk(tipo_metodo_pago);
    if (!metodoPago) {
      return res.status(404).json({ message: 'Método de pago no encontrado' });
    }

    metodoPago.tipo_metodo_pago = nuevo_tipo_metodo_pago || metodoPago.tipo_metodo_pago;

    await metodoPago.save();
    res.status(200).json(metodoPago);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el método de pago', error });
  }
};

// Eliminar un método de pago
exports.deleteMetodoPago = async (req, res) => {
  try {
    const { tipo_metodo_pago } = req.params;
    const metodoPago = await MetodoPago.findByPk(tipo_metodo_pago);
    if (!metodoPago) {
      return res.status(404).json({ message: 'Método de pago no encontrado' });
    }
    await metodoPago.destroy();
    res.status(204).json({ message: 'Método de pago eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el método de pago', error });
  }
};
