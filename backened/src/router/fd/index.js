// filepath: c:\Users\RITIK\Desktop\react_mastery\Banking-app\backened\src\router\fd.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('FD route working!');
});

module.exports = router;