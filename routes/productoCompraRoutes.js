const express = require('express');
const router = express.Router();
const productoCompraController = require('../controllers/productoCompraController');

router.post('/', productoCompraController.createProductoCompra);
router.get('/', productoCompraController.getProductosCompras);
router.get('/:codigo_producto/:id_compra', productoCompraController.getProductoCompraById);
router.delete('/:codigo_producto/:id_compra', productoCompraController.deleteProductoCompra);

module.exports = router;
