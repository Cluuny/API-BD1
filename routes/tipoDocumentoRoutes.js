const express = require('express');
const router = express.Router();
const tipoDocumentoController = require('../controllers/tipoDocumentoController');

router.post('/', tipoDocumentoController.createTipoDocumento);
router.get('/', tipoDocumentoController.getTipoDocumentos);
router.get('/:id', tipoDocumentoController.getTipoDocumentoById);
router.put('/:id', tipoDocumentoController.updateTipoDocumento);
router.delete('/:id', tipoDocumentoController.deleteTipoDocumento);

module.exports = router;
