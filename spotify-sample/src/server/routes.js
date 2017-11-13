const express = require('express');
const router = new express.Router();


router.get('/', (_, res) => {
  res.send('Server running');
});



module.exports = router;