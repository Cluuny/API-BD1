const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Devoluciones = sequelize.define('Devoluciones', {
  id_devolucion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  motivo: {
    type: DataTypes.STRING(1024),
    allowNull: false,
  }
}, {
  tableName: 'Devoluciones',
  timestamps: false,
});

module.exports = Devoluciones;

