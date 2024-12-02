const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Producto = require('./Productos');
const Venta = require('./Ventas');

const ProductoVenta = sequelize.define('ProductoVenta', {
  codigo_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_venta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  valor_venta: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cantidad_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Productos_Ventas',
  timestamps: false,
});

ProductoVenta.belongsTo(Producto, { foreignKey: 'codigo_producto' });
ProductoVenta.belongsTo(Venta, { foreignKey: 'id_venta' });

module.exports = ProductoVenta;
