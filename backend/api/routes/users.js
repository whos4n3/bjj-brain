const express = require('express');
const router = express.Router();

// Placeholder for users routes
router.get('/', (req, res) => {
  res.json({ message: 'Users endpoint' });
});

module.exports = router;