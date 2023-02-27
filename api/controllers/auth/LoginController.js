const User = require('../../models/UserModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const LoginController = {
    
    create: async (req, res) => {
        const {email, password} = req.body

        //validations
        if(!email) return res.status(422).json({msg: "O email é obrigatório!"})
        if(!password) return res.status(422).json({msg: "A senha é obrigatória!"})

        //check if user exists
        const user = await User.findOne({email: email})
        if(!user) return res.status(404).json({msg: "Usuário não encontrado!"})

        //check if password match
        const checkPassword = await bcrypt.compare(password, user.password)
        if(!checkPassword) return res.status(422).json({msg: "Senha incorreta!"})


        try{
            const secret = process.env.SECRET
            const id = user._id
            const token =  jwt.sign(
                {
                    id: id
                },
                secret
            )

            res.status(200).json({msg: "Token gerado com sucesso!", token, id})

        }catch(error) { 
            res.status(500).json({ erro: error })
        }
    },

    private: async (req, res) => {
        const id = req.params.id
    
        //check if user exists
        const user = await User.findById(id, '-password')
        if(!user) return res.status(404).json({msg: "Usuário não encontrado"})
    
        res.status(200).json({ user })

    }
}

module.exports = LoginController