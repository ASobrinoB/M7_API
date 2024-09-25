const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) =>
    {
        const {username, email, password} = req.body
    
        try {
            let user = await User.findOne({email})
    
            if (!user)
            {
            return res.status(400).json({msg: "e-mail no esta registrado"})
            }
    
            const checkPassword = await bcryptjs.compare(password, user.password)
            
            if (!checkPassword)
            {
            return await res.status(400).json({msg: "e-mail o password estan incorrectos"})
            }
    
            const payload = { user: { id: user.id } }
    
            jwt.sign(payload, process.env.SECRET, {expiresIn: 36000}, (error, token) =>
            {
             if (error) throw error;
             res.json({token})
            })
            }
    
        catch (error)
            {
            res.json({error: error.message})
            }
    }
    
exports.verifyToken = async (req, res) =>
    {
        const {id} = req.body
    
        try {
            const user = await User.findById(id).select('-password')
            res.json({user})
            }
    
        catch (error)
            {
            res.status(500).json({error: error.message})
            }
    }

exports.getUserById = async (req, res) =>
    {
        const {id} = req.body
    
        try {
            const user = await User.findById(id).select('-password')
    
            if (!user)
            {
            return res.status(400).json({ msg: "Usuario no registrado" });
            }
            res.json({user})
            } 
        catch (error)
            {
            res.status(500).json({error: error.message})
            }
    }
    
exports.getUsers = async (req, res) =>
    {
        try {
            const users = await User.find({});
            res.json({users})
            }
    
        catch (error)
            {
            res.status(500).json({error: error.message})
            }
    }
    
exports.addUser = async (req, res) =>
    {
        const {username, email, password} = req.body   

        try {
            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(password, salt)
            const respuestaDB = await User.create ({username, email, password: hashedPassword})

            return res.json(respuestaDB)
            }

        catch (error)
            {
            return res.status(500).json({error: error.message})
            }
    }

exports.updateUserById = async (req, res) =>
    {
        const {id, username, email, password} = req.body   
    
        try 
            {
            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(password, salt)
            const user = await User.findByIdAndUpdate(id, {username, email, password: hashedPassword}, {new: true})
            res.json(user)
            }
    
        catch (error)
            {       
            return res.status(500).json({error: error.message})
            }
    }
    
exports.deleteUserById = async (req, res) =>
    {
        const {id} = req.body
    
        try {
            const user = await User.findByIdAndDelete({_id: id})
            res.json(user)
            } 
            
        catch (error)
            {
            return res.status(500).json({error: error.message})
            }
    }