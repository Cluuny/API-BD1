const express = require('express');
const router = express.Router();
const ofertaController = require('../controllers/ofertaController');

router.post('/', ofertaController.createOferta);
router.get('/', ofertaController.getOfertas);
router.get('/:id_proveedor/:codigo_producto', ofertaController.getOfertaById);
router.put('/:id_proveedor/:codigo_producto', ofertaController.updateOferta);
router.delete('/:id_proveedor/:codigo_producto', ofertaController.deleteOferta);

module.exports = router;
