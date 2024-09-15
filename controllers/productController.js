const Product = require('../models/Product');

exports.getProductById = async (req, res) =>
    {
        const {id} = req.body
    
        try {
            const product = await Product.findById(id)
    
            if (!product)
            {
            return res.status(400).json({ msg: "Producto no existe" });
            }
            res.json({product})
            } 
        catch (error)
            {
            res.status(500).json({error: error.message})
            }
    }

exports.getProducts = async (req, res) =>
{
    try {
        const products = await Product.find({});
        res.json({products}) 
        }

    catch (error)
        {
        res.status(500).json({error: error.message})
        }
}

exports.addProduct = async(req, res) =>
{
    const {description, specification, priceUSD, shippingUSD, weightKG, stock, image} = req.body

    try {
        const product = await Product.create({description, specification, priceUSD, shippingUSD, weightKG, stock, image})
        res.json(product)
        } 

    catch (error)
        {
        res.status(500).json({error: error.message})
        }
}

exports.updateProductById = async (req, res) =>
{
    const {id, description, specification, priceUSD, shippingUSD, weightKG, stock, image} = req.body

    try 
        {
        const product = await Product.findByIdAndUpdate(id, {description, specification, priceUSD, shippingUSD, weightKG, stock, image}, {new: true})
        res.json(product)
        }

    catch (error)
        {       
        res.status(500).json({error: error.message})
        }
}

exports.deleteProductById = async (req, res) =>
{
    const {id} = req.body

    try {
        const product = await Product.findByIdAndDelete({_id: id})
        res.json(product)
        } 
        
    catch (error)
        {
        res.status(500).json({error: error.message})
        }
}