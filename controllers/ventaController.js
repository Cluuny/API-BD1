const Venta = require('../models/Ventas');

// Crear una nueva venta
exports.createVenta = async (req, res) => {
  try {
    const { id_persona, tipo_metodo_pago, valor_total, fecha_hora_venta, estado_venta } = req.body;
    const nuevaVenta = await Venta.create({
      id_persona,
      tipo_metodo_pago,
      valor_total,
      fecha_hora_venta,
      estado_venta,
    });
    res.status(201).json(nuevaVenta);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la venta', error });
  }
};

// Obtener todas las ventas
exports.getVentas = async (req, res) => {
  try {
    const ventas = await Venta.findAll();
    res.status(200).json(ventas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener ventas', error });
  }
};

// Obtener una venta por su id
exports.getVentaById = async (req, res) => {
  try {
    const venta = await Venta.findByPk(req.params.id);
    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }
    res.status(200).json(venta);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la venta', error });
  }
};

// Actualizar una venta
exports.updateVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_persona, tipo_metodo_pago, valor_total, fecha_hora_venta, estado_venta } = req.body;
    const venta = await Venta.findByPk(id);
    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }

    venta.id_persona = id_persona || venta.id_persona;
    venta.tipo_metodo_pago = tipo_metodo_pago || venta.tipo_metodo_pago;
    venta.valor_total = valor_total || venta.valor_total;
    venta.fecha_hora_venta = fecha_hora_venta || venta.fecha_hora_venta;
    venta.estado_venta = estado_venta || venta.estado_venta;

    await venta.save();
    res.status(200).json(venta);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la venta', error });
  }
};

// Eliminar una venta
exports.deleteVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const venta = await Venta.findByPk(id);
    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }
    await venta.destroy();
    res.status(204).json({ message: 'Venta eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la venta', error });
  }
};
