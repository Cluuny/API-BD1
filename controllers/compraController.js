const Compra = require('../models/Compra');

// Crear una nueva compra
exports.createCompra = async (req, res) => {
  try {
    const { id_proveedor, tipo_metodo_pago, valor_compra, fecha_hora_compra, estado_compra, fecha_vencimiento } = req.body;
    const nuevaCompra = await Compra.create({
      id_proveedor,
      tipo_metodo_pago,
      valor_compra,
      fecha_hora_compra,
      estado_compra,
      fecha_vencimiento
    });
    res.status(201).json(nuevaCompra);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la compra', error });
  }
};

// Obtener todas las compras
exports.getCompras = async (req, res) => {
  try {
    const compras = await Compra.findAll();
    res.status(200).json(compras);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las compras', error });
  }
};

// Obtener una compra por su id
exports.getCompraById = async (req, res) => {
  try {
    const compra = await Compra.findByPk(req.params.id);
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    res.status(200).json(compra);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la compra', error });
  }
};

// Actualizar una compra
exports.updateCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_proveedor, tipo_metodo_pago, valor_compra, fecha_hora_compra, estado_compra, fecha_vencimiento } = req.body;
    const compra = await Compra.findByPk(id);
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }

    compra.id_proveedor = id_proveedor || compra.id_proveedor;
    compra.tipo_metodo_pago = tipo_metodo_pago || compra.tipo_metodo_pago;
    compra.valor_compra = valor_compra || compra.valor_compra;
    compra.fecha_hora_compra = fecha_hora_compra || compra.fecha_hora_compra;
    compra.estado_compra = estado_compra || compra.estado_compra;
    compra.fecha_vencimiento = fecha_vencimiento || compra.fecha_vencimiento;

    await compra.save();
    res.status(200).json(compra);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la compra', error });
  }
};

// Eliminar una compra
exports.deleteCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const compra = await Compra.findByPk(id);
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    await compra.destroy();
    res.status(204).json({ message: 'Compra eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la compra', error });
  }
};
