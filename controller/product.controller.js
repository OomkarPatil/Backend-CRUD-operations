const Product = require('../models/product.model');

//-------------------- get all products------------------------

const getProducts = async (req, res)=>{
    try {
        const products  = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



//-------------------- get all products by id-----------------

const getProduct = async (req,res)=>{
     try {
        const { id } = req.params;
        const product  = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//--------------------create all products---------------------

const addProduct = async (req, res)=>{
        try {
            const product = await Product.create(req.body)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
}


//-------------------- update products by id-------------------

const UpdateProduct = async (req,res)=>{
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message:"Product not found !!"})
        }
        const updatedprod = await Product.findById(id);
        res.status(200).json(updatedprod);

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//-------------------- delete products by id-----------------------

const deleteProduct = async (req, res)=>{
    try {
            const { id } = req.params
            const product  = await Product.findByIdAndDelete(id);
            if(!product){
                return res.status(404).json({message:"Product not found !!"})
            }
            const updatedprod = await Product.findById(id);
            res.status(200).json({message:"Product deleted successfully"})
            
        } catch (error) {
            res.send(500).json({message: error.message})
        }
}

module.exports = {
    getProduct,
    getProducts,
    addProduct,
    UpdateProduct,
    deleteProduct
}