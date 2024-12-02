const express = require('express');
const router = express.Router();
const productoVentaController = require('../controllers/productoVentaController');

router.post('/', productoVentaController.createProductoVenta);
router.get('/', productoVentaController.getProductoVentas);
router.get('/:id', productoVentaController.getProductoVentaById);
router.put('/:id', productoVentaController.updateProductoVenta);
router.delete('/:id', productoVentaController.deleteProductoVenta);

module.exports = router;
