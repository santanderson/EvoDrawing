const Image = require('../models/ImageModel');

const ImageController = {
    
    create: async (req, res) => {
        try{
          const {name, userId} = req.body
          const file = req.file

          const img = new Image({
            name,
            userId,
            src: file.path
          })

            await img.save()

            await res.status(201).json({img, message: `Image added!` })
        }catch(error) {
            res.status(500).json({ erro: error })
        }
    },

    read: async (req, res) => {
        try {
            const img = await Image.find()

            res.status(200).json(img)
          } catch (error) {
            res.status(500).json({ erro: error })
          }
    },

    readById: async (req, res) => {
        const userId = req.body.userId

        try {
            const img = await Image.find({userId: userId})
        
            res.status(200).json(img)
          } catch (error) {
            res.status(500).json({ erro: error })
          }
    },

    delete: async (req, res) => {
        const {userId, imgId} = req.body

        try {
            const img = await Image.findOne({_id: imgId})

            if(img.userId !== userId) return res.status(422).json({msg: "You can´t delete this image!"})
        
            img.delete();
            res.status(200).json({msg: "Image deleted!"})
          } catch (error) {
            res.status(500).json({ erro: error })
          }
    }
}

module.exports = ImageController