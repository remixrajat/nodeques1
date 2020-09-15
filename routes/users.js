const express = require('express');
const router = express.Router();
// const router = require('express-promise-router')();

const Userscontroller = require('../controllers/users');

router.get('/', Userscontroller.index);
router.post('/', Userscontroller.newUser);

router.get('/:userId', Userscontroller.getUser);
router.put('/:userId', Userscontroller.replaceUser);
router.patch('/:userId', Userscontroller.updateUser);

router.get('/:userId/test_scores', Userscontroller.getUserUser_profile);
router.post('/:userId/test_scores', Userscontroller.newUserUser_profile);


module.exports = router;