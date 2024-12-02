const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const TipoProveedor = require('./TipoProovedor');
const TipoDocumento = require('./TipoDocumento');

const Proveedor = sequelize.define('Proveedor', {
  id_proveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_tipo_proveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_tipo_documento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  telefono_contacto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre_proveedor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Proveedores',
  timestamps: false,
});

Proveedor.belongsTo(TipoProveedor, { foreignKey: 'id_tipo_proveedor' });
Proveedor.belongsTo(TipoDocumento, { foreignKey: 'id_tipo_documento' });

module.exports = Proveedor;
