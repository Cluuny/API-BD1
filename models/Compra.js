const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Proveedor = require('./Proovedor');
const MetodoPago = require('./MetodoPago');

const Compra = sequelize.define('Compra', {
  id_compra: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_proveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipo_metodo_pago: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor_compra: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fecha_hora_compra: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado_compra: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_vencimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Compras',
  timestamps: false,
});

Compra.belongsTo(Proveedor, { foreignKey: 'id_proveedor' });
Compra.belongsTo(MetodoPago, { foreignKey: 'tipo_metodo_pago' });

module.exports = Compra;
