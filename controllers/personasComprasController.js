// controllers/personasComprasController.js
const PersonasCompras = require('../models/PersonaCompra');

// Crear un nuevo registro en Personas_Compras
exports.create = async (req, res) => {
  const { id_persona, id_compra } = req.body;

  try {
    const nuevaPersonaCompra = await PersonasCompras.create({
      id_persona,
      id_compra
    });
    res.status(201).json(nuevaPersonaCompra);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el registro' });
  }
};

// Obtener todos los registros de Personas_Compras
exports.getAll = async (req, res) => {
  try {
    const personasCompras = await PersonasCompras.findAll();
    res.status(200).json(personasCompras);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los registros' });
  }
};

// Obtener un registro por sus claves primarias
exports.getById = async (req, res) => {
  const { id_persona, id_compra } = req.params;

  try {
    const personaCompra = await PersonasCompras.findOne({
      where: {
        id_persona,
        id_compra
      }
    });

    if (!personaCompra) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }

    res.status(200).json(personaCompra);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el registro' });
  }
};

// Actualizar un registro por sus claves primarias
exports.update = async (req, res) => {
  const { id_persona, id_compra } = req.params;
  const { newIdPersona, newIdCompra } = req.body;

  try {
    const personaCompra = await PersonasCompras.findOne({
      where: {
        id_persona,
        id_compra
      }
    });

    if (!personaCompra) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }

    personaCompra.id_persona = newIdPersona || personaCompra.id_persona;
    personaCompra.id_compra = newIdCompra || personaCompra.id_compra;

    await personaCompra.save();
    res.status(200).json(personaCompra);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el registro' });
  }
};

// Eliminar un registro por sus claves primarias
exports.delete = async (req, res) => {
  const { id_persona, id_compra } = req.params;

  try {
    const personaCompra = await PersonasCompras.findOne({
      where: {
        id_persona,
        id_compra
      }
    });

    if (!personaCompra) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }

    await personaCompra.destroy();
    res.status(200).json({ message: 'Registro eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el registro' });
  }
};
