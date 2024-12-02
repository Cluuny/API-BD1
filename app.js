const express = require('express');
const app = express();
const sequelize = require('./db');
const productoRoutes = require('./routes/productoRoutes');
const ventaRoutes = require('./routes/ventaRoutes');
const compraRoutes = require('./routes/compraRoutes');
const personaRoutes = require('./routes/personaRoutes');
const ofertaRoutes = require('./routes/ofertaRoutes');
const devolucionRoutes = require('./routes/devolucionRoutes');
const devolucionProductoRoutes = require('./routes/devolucionProductoRoutes');
const productoVentaRoutes = require('./routes/productoVentaRoutes');
const productoCompraRoutes = require('./routes/productoCompraRoutes');
const personasComprasRoutes = require('./routes/personasComprasRoutes');
const metodoPagoRoutes = require('./routes/metodoPagoRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const tipoProveedorRoutes = require('./routes/tipoProveedorRoutes');
const tipoDocumentoRoutes = require('./routes/tipoDocumentoRoutes');

app.use(express.json());

app.use('/api/productos', productoRoutes);
app.use('/api/ventas', ventaRoutes);
app.use('/api/compras', compraRoutes);
app.use('/api/personas', personaRoutes);
app.use('/api/ofertas', ofertaRoutes);
app.use('/api/devoluciones', devolucionRoutes);
app.use('/api/devoluciones_productos', devolucionProductoRoutes);
app.use('/api/productos_ventas', productoVentaRoutes);
app.use('/api/productos_compras', productoCompraRoutes);
app.use('/api/personas_compras', personasComprasRoutes);
app.use('/api/metodos_pago', metodoPagoRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/tipos_proveedores', tipoProveedorRoutes);
app.use('/api/tipos_documentos', tipoDocumentoRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
  });
});
