const express = require('express');
const router = express.Router();
const metodoPagoController = require('../controllers/metodoPagoController');

router.post('/', metodoPagoController.createMetodoPago);
router.get('/', metodoPagoController.getMetodosPago);
router.get('/:tipo_metodo_pago', metodoPagoController.getMetodoPagoById);
router.put('/:tipo_metodo_pago', metodoPagoController.updateMetodoPago);
router.delete('/:tipo_metodo_pago', metodoPagoController.deleteMetodoPago);

module.exports = router;
