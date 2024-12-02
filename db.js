const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tienda', 'vicente', 'vicente', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: true,
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida con éxito');
  })
  .catch((error) => {
    console.error('No se pudo conectar:', error);
  });

module.exports = sequelize;
