const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const TipoProveedor = sequelize.define('TipoProveedor', {
  id_tipo_proveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  categoria_proveedor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Tipos_Proveedores',
  timestamps: false,
});

module.exports = TipoProveedor;
