const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const TipoDocumento = sequelize.define('TipoDocumento', {
  id_tipo_documento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  tipicidad_documento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Tipos_Documentos',
  timestamps: false,
});

module.exports = TipoDocumento;
