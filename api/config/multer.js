const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function(req, file, cb) { //destination é o destino em que as imagens serão guardadas
        cb(null, path.join(__dirname, '../uploads/'))
    },
    filename: function(req, file, cb) { //filename é o nome que as imagens terá
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage})

module.exports = upload