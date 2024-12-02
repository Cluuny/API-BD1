const express = require('express');
const router = express.Router();
const devolucionProductoController = require('../controllers/devolucionProductoController');

router.post('/', devolucionProductoController.createDevolucionProducto);
router.get('/', devolucionProductoController.getDevolucionesProductos)
router.get('/:id', devolucionProductoController.getDevolucionProductoById);
router.put('/:id', devolucionProductoController.updateDevolucionProducto);
router.delete('/:id', devolucionProductoController.deleteDevolucionProducto);

module.exports = router;
