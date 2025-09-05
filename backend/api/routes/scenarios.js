const express = require('express');
const router = express.Router();

// Placeholder for scenarios routes
router.get('/', (req, res) => {
  res.json({ message: 'Scenarios endpoint' });
});

module.exports = router;