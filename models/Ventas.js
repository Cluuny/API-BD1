const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Persona = require('./Persona');
const MetodoPago = require('./MetodoPago');

const Venta = sequelize.define('Venta', {
  id_venta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_persona: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipo_metodo_pago: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor_total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fecha_hora_venta: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado_venta: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Ventas',
  timestamps: false,
});

Venta.belongsTo(Persona, { foreignKey: 'id_persona' });
Venta.belongsTo(MetodoPago, { foreignKey: 'tipo_metodo_pago' });

module.exports = Venta;
