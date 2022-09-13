const Product = require('../models/Product')
const asyncHandler = require('express-async-handler')


exports.createProduct = async (req, res) =>{
  const title = req.body.title
  const desc = req.body.desc
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const quantity = req.body.quantity
  const category = req.body.category
  const product =  new Product({
    title,desc,imageUrl,price,category,quantity
  })
     await  product.save()
     await res.status(201).json({message:"Product was created " , product: product})
  console.log('Product was created');
}

exports.getAllProducts = async (req, res ) => {
   try {
     const product  = await   Product.find()
     await  res.status(200).json(product)
   } catch (e) {
     res.status(404).json({message:"Products were not found !!!"})
     console.log(e);
   }
}


exports.updateProduct = asyncHandler( async (req,res) =>{
  const product = await Product.findById(req.params.id)

  try {
    if (!product) {
      throw new Error('product not found...')
    }

    await Product.findByIdAndUpdate(req.params.id,req.body,{new:true} )
    await res.status(200).json({message: "Product has been updated...",productId: req.params.id})
  } catch (e) {
    res.status(404).json({message:"Products were not found !!!"})
    console.log(e);
  }
})

exports.deleteProduct = asyncHandler( async (req,res) =>{
  try {
    if (!req.params.id) {
      throw new Error('add product id')
    }

    await Product.findByIdAndDelete(req.params.id )
    await res.status(200).json({message: "Product has been deleted...",productId: req.params.id})
  } catch (e) {
    res.status(404).json({message:"Products were not found !!!"})
    console.log(e);
  }
})
