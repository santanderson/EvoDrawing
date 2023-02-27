const router = require('express').Router()
const ImageController = require('../controllers/ImageController')
const upload = require("../config/multer")
const cors = require('cors')

router.use(cors())

router.post('/addImage', upload.single("file"), ImageController.create);
router.get('/', ImageController.read);
router.post('/gallery', ImageController.readById)
router.delete('/gallery/delete', ImageController.delete)


module.exports = router;