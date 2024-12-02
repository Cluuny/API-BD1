const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Producto = require('./Productos');
const Devolucion = require('./Devolucion');

const DevolucionProducto = sequelize.define('DevolucionProducto', {
  id_devolucion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  codigo_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  valor_compra: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor_venta: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Devoluciones_productos',
  timestamps: false,
});

DevolucionProducto.belongsTo(Devolucion, { foreignKey: 'id_devolucion' });
DevolucionProducto.belongsTo(Producto, { foreignKey: 'codigo_producto' });

module.exports = DevolucionProducto;
