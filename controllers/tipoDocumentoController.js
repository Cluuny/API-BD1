const TipoDocumento = require('../models/TipoDocumento');

// Crear un nuevo tipo de documento
exports.createTipoDocumento = async (req, res) => {
  try {
    const { tipicidad_documento } = req.body;
    const nuevoTipoDocumento = await TipoDocumento.create({
      tipicidad_documento
    });
    res.status(201).json(nuevoTipoDocumento);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el tipo de documento', error });
  }
};

// Obtener todos los tipos de documentos
exports.getTipoDocumentos = async (req, res) => {
  try {
    const tiposDocumentos = await TipoDocumento.findAll();
    res.status(200).json(tiposDocumentos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tipos de documentos', error });
  }
};

// Obtener un tipo de documento por su id
exports.getTipoDocumentoById = async (req, res) => {
  try {
    const tipoDocumento = await TipoDocumento.findByPk(req.params.id);
    if (!tipoDocumento) {
      return res.status(404).json({ message: 'Tipo de documento no encontrado' });
    }
    res.status(200).json(tipoDocumento);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el tipo de documento', error });
  }
};

// Actualizar un tipo de documento
exports.updateTipoDocumento = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipicidad_documento } = req.body;
    const tipoDocumento = await TipoDocumento.findByPk(id);
    if (!tipoDocumento) {
      return res.status(404).json({ message: 'Tipo de documento no encontrado' });
    }

    tipoDocumento.tipicidad_documento = tipicidad_documento || tipoDocumento.tipicidad_documento;

    await tipoDocumento.save();
    res.status(200).json(tipoDocumento);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el tipo de documento', error });
  }
};

// Eliminar un tipo de documento
exports.deleteTipoDocumento = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoDocumento = await TipoDocumento.findByPk(id);
    if (!tipoDocumento) {
      return res.status(404).json({ message: 'Tipo de documento no encontrado' });
    }
    await tipoDocumento.destroy();
    res.status(204).json({ message: 'Tipo de documento eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el tipo de documento', error });
  }
};
