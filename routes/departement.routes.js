const router = require('express').Router();
// const police_check = require('../middleware/policy');
const departementController = require('../controller/departement.controller');

router.get('/departement', 
                // police_check('read', 'Departement'),
                departementController.getDepartement
);
router.post('/departement', 
                // police_check('create', 'Departement'),
                departementController.postDepartement
);
router.put('/departement/:id', 
                // police_check('update', 'Departement'),
                departementController.putDepartement
);
router.delete('/departement/:id', 
                // police_check('delete', 'Departement'),
                departementController.deleteDepartement
);

module.exports = router;