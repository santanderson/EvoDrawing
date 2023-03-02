const router = require('express').Router()
const ImageController = require('../controllers/ImageController')
const upload = require("../config/multer")
const checkToken = require('../middlewares/login.js')
const cors = require('cors')

router.use(cors())

router.post('/addImage', checkToken, upload.single("file"), ImageController.create);
router.get('/', ImageController.read);
router.post('/gallery', checkToken, ImageController.readById)
router.delete('/gallery/delete', checkToken, ImageController.delete)


module.exports = router;