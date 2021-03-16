const express = require("express");
const router = express.Router();
const { signup, signin, requireSignin } = require("../../controllers/admin/auth");


router.post('/admin/signin', signin); 

router.post('/admin/signup', signup);

// router.post('/profile', requireSignin,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;