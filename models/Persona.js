const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Persona = sequelize.define('Persona', {
  id_persona: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_persona: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion_persona: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado_empleado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Personas',
  timestamps: false,
});

module.exports = Persona;
