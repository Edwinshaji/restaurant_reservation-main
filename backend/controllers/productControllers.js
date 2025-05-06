import productModel from "../models/productModels.js"
import {v2 as cloudinary} from "cloudinary"

const addproduct = async (req, res) => {
   try{
         const { name, price, description,category } = req.body;
         const image = req.files;

         let imageUrl= ""
         if (image){
            let result = await cloudinary.uploader.upload(image.path, {resouce_type: "image"})
            imageUrl = result.secure_url

         }else{
            imageUrl = "https://via.placeholder.com/150"
         }
         const productData={
            name,description,category,price:Number(price),
            image:imageUrl,
            date:Date.now()
         }
         console.log(productData)
         const product = new productModel(productData)
            await product.save()

            res.json({success:true, message:"Product added successfully", product})
                
   }catch(error){
         console.log(error)
         res.json({success:false, message:"Product not added"})
   }


}

const listproducts = async (req, res) => {
 try {
   const products = await productModel.find({})
   res.json({ success: true, products })
 } catch (error) {
   console.log(error)
   res.json({ success: false, message: "Error fetching products" })
 }
}


const removeproduct = async (req, res) => {
   try {
      await productModel.findByIdAndDelete(req.body._id)
      res.json({ success: true, message: "Product removed successfully" })
   } catch (error) {
      console.log(error)
      res.json({ success: false, message: "Error removing product" })
      
   }

}

const singleproduct = async (req, res) => {

}

export { addproduct, listproducts, removeproduct, singleproduct }