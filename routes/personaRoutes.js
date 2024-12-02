const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

router.post('/', personaController.createPersona);
router.get('/', personaController.getPersonas);
router.get('/:id', personaController.getPersonaById);
router.patch('/:id', personaController.updatePersona);
router.delete('/:id', personaController.deletePersona);

module.exports = router;
