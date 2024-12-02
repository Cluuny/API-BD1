const express = require('express');
const router = express.Router();
const tipoProveedorController = require('../controllers/tipoProveedorController');

router.post('/', tipoProveedorController.createTipoProveedor);
router.get('/', tipoProveedorController.getTipoProveedores);
router.get('/:id', tipoProveedorController.getTipoProveedorById);
router.put('/:id', tipoProveedorController.updateTipoProveedor);
router.delete('/:id', tipoProveedorController.deleteTipoProveedor);

module.exports = router;
