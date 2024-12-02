const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const MetodoPago = sequelize.define('MetodoPago', {
  tipo_metodo_pago: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
}, {
  tableName: 'Metodos_pago',
  timestamps: false,
});

module.exports = MetodoPago;
