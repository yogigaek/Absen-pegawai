const router = require('express').Router();
const policy_check = require('../middleware/policy');
const reportController = require('../controller/reportMonth.controller');

router.get('/report', reportController.getReport
);
router.post('/report', reportController.postReport
);
router.put('/report/:id', reportController.putReport
);
router.delete('/report/:id', reportController.deleteReport
);

module.exports = router;