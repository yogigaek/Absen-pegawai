const router = require('express').Router();
const leaveController= require('../controller/leave.controller');
// const policy_check = require('../middleware/policy');

router.get('/leave', leaveController.getLeave
);
router.post('/leave', leaveController.postLeave
);
router.put('/leave/:id', leaveController.putLeave
);
router.delete('/leave/:id', leaveController.deleteLeave
);

module.exports = router;