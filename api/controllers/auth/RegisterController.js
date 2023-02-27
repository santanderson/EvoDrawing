const User = require('../../models/UserModel.js');
const bcrypt = require('bcrypt')

const RegisterController = {
    
    create: async (req, res) => {
        const {name, email, password, confirmpassword} = req.body

        //validations
        if(!name) return res.status(422).json({msg: "O nome é obrigatório!"})
        if(!email) return res.status(422).json({msg: "O email é obrigatório!"})
        if(!password) return res.status(422).json({msg: "A senha é obrigatória!"})
        if(!confirmpassword) return res.status(422).json({msg: "Confirme sua senha!"})
        if(password !== confirmpassword) return res.status(422).json({msg: "As senhas não coinscidem!"})


        //check if user exists
        const userExists = await User.findOne({email: email})
        if(userExists) return res.status(422).json({msg: "Este email já está registrado!"})

        //create encrypted password
        const salt = await bcrypt.genSalt(12)
        const passwordhash = await bcrypt.hash(password, salt)

        //register user
        const user = new User({
            name,
            email,
            password: passwordhash
        })


        try{

            await user.save();
            res.status(201).json({msg: "Usuário registrado com sucesso!"})

        }catch(error) { 
            res.status(500).json({ erro: error })
        }
    },





    getting: async (req, res) => {
        try {
            const song = await User.find()
        
            res.status(200).json(song)
          } catch (error) {
            res.status(500).json({ erro: error })
          }
    }
}

module.exports = RegisterController