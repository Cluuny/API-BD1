const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Persona = require('./Persona');

const Producto = sequelize.define('Producto', {
  codigo_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_persona: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor_compra: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  valor_venta: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  descripcion_producto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre_producto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Productos',
  timestamps: false,
});

Producto.belongsTo(Persona, { foreignKey: 'id_persona' });

module.exports = Producto;
