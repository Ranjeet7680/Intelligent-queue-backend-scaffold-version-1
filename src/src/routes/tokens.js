const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validate');
const tokenController = require('../controllers/tokenController');
const { generateTokenSchema, nextTokenSchema, serveSchema, skipSchema } = require('../validators/tokenSchemas');


router.post('/generate-token', validate(generateTokenSchema), tokenController.generateToken);
router.post('/next-token', validate(nextTokenSchema), auth, tokenController.nextToken);
router.post('/serve', validate(serveSchema), auth, tokenController.serveToken);
router.post('/skip', validate(skipSchema), auth, tokenController.skipToken);


module.exports = router;