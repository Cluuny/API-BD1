const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Producto = require('./Productos');
const Compra = require('./Compra');

const ProductoCompra = sequelize.define('ProductoCompra', {
  codigo_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_compra: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
}, {
  tableName: 'Productos_Compras',
  timestamps: false,
});

ProductoCompra.belongsTo(Producto, { foreignKey: 'codigo_producto' });
ProductoCompra.belongsTo(Compra, { foreignKey: 'id_compra' });

module.exports = ProductoCompra;
