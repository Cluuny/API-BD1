const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Persona = require('./Persona');
const Compra = require('./Compra');

const PersonaCompra = sequelize.define('PersonaCompra', {
  id_persona: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_compra: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
}, {
  tableName: 'Personas_Compras',
  timestamps: false,
});

PersonaCompra.belongsTo(Persona, { foreignKey: 'id_persona' });
PersonaCompra.belongsTo(Compra, { foreignKey: 'id_compra' });

module.exports = PersonaCompra;
