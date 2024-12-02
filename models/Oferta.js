const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Proveedor = require('./Proovedor');
const Producto = require('./Productos');

const Oferta = sequelize.define('Oferta', {
  id_proveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  codigo_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'Ofertas',
  timestamps: false,
});

Oferta.belongsTo(Proveedor, { foreignKey: 'id_proveedor' });
Oferta.belongsTo(Producto, { foreignKey: 'codigo_producto' });

module.exports = Oferta;
