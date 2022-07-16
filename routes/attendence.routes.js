const router = require('express').Router();
// const policy_check = require('../middleware/policy');
const attendenceController = require('../controller/attendence.controller');

router.get('/attendence', attendenceController.getAttendence
);
router.post('/attendence', attendenceController.postAttendence
);
router.put('/attendence/:id', attendenceController.putAttendence
);
router.delete('/attendence/:id', attendenceController.deleteAttendence
);

module.exports = router;