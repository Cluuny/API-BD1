const Persona = require('../models/Persona');

// Crear una nueva persona
exports.createPersona = async (req, res) => {
  try {
    const { nombre_persona, direccion_persona, estado_empleado } = req.body;
    console.log(nombre_persona)
    console.log(direccion_persona)
    console.log(estado_empleado)
    const nuevaPersona = await Persona.create({
      nombre_persona,
      direccion_persona,
      estado_empleado,
    });
    res.status(201).json(nuevaPersona);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la persona', error });
  }
};

// Obtener todas las personas
exports.getPersonas = async (req, res) => {
  try {
    const personas = await Persona.findAll();
    res.status(200).json(personas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las personas', error });
  }
};

// Obtener una persona por su id
exports.getPersonaById = async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (!persona) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    res.status(200).json(persona);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la persona', error });
  }
};

// Actualizar una persona
exports.updatePersona = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_persona, direccion_persona, estado_empleado } = req.body;
    const persona = await Persona.findByPk(id);
    if (!persona) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }

    persona.nombre_persona = nombre_persona || persona.nombre_persona;
    persona.direccion_persona = direccion_persona || persona.direccion_persona;
    persona.estado_empleado = estado_empleado !== undefined ? estado_empleado : persona.estado_empleado;

    await persona.save();
    res.status(200).json(persona);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la persona', error });
  }
};

// Eliminar una persona
exports.deletePersona = async (req, res) => {
  try {
    const { id } = req.params;
    const persona = await Persona.findByPk(id);
    if (!persona) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    await persona.destroy();
    res.status(204).json({ message: 'Persona eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la persona', error });
  }
};
