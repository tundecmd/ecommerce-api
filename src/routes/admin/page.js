const express = require("express");
const { upload, adminMiddleware, requireSignin } = require("../../common-middleware");
const { createPage } = require("../../controllers/admin/page");
const router = express.Router();

router.post(`/page/create`, requireSignin, adminMiddleware, upload.fields([
  { name: 'banners' },
  { name: 'products' },

]), createPage);

module.exports = router;