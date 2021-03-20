const express = require("express");
const { requireSignin, userMiddleware } = require("../common-middleware");
const router = express.Router();
const { addItemToCart } = require("../controllers/cart");

router.post('/user/cart/add-to-cart', requireSignin, userMiddleware, addItemToCart);

module.exports = router;