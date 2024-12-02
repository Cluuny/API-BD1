// routes/personasComprasRoutes.js
const express = require('express');
const router = express.Router();
const personasComprasController = require('../controllers/personasComprasController');

router.post('/', personasComprasController.create);
router.get('/', personasComprasController.getAll);
router.get('/:id_persona/:id_compra', personasComprasController.getById);
router.put('/:id_persona/:id_compra', personasComprasController.update);
router.delete('/:id_persona/:id_compra', personasComprasController.delete);

module.exports = router;
