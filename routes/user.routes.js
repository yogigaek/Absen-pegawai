const router = require('express').Router();
// const policy_check = require('../middleware/policy');
const userController = require('../controller/user.controller');

router.get('/user', userController.getUser
);
router.post('/user', userController.postUser
);
router.put('/user/:id', userController.putUser
);
router.delete('/user/:id', userController.deleteUser
);

module.exports = router;