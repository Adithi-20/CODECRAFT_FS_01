const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// @route   GET api/protected
// @desc    Get logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    // req.user is obtained from the auth middleware
    res.json({ msg: 'Access granted to protected route', user: req.user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;