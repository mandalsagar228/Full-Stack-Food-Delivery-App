import foodModel from "../model/foodModel.js";
import fs from "fs"

// add food item

const addFood=async(req,res)=>{
    let image_filename = req.file ? req.file.filename : null;
    console.log("this is image",image_filename);

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        console.log("success");
        res.json({success:true,message:"Food added successfully",food})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }


}

// list food
const listFood=async(req,res)=>{
    try {
        const foods=await foodModel.find({});
        console.log({success:foods});
        res.json({success:true,data:foods})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error})
    }

}

// Remove item
const removeFood=async(req,res)=>{
    try {
        const  food=await foodModel.findById(req.body.id);
        fs.unlink(  `uploads/${food.image}`,()=>{})
        res.json({success:true,message:"Image removed"})

        await foodModel.findByIdAndDelete(req.body.id);

    } catch (error) {
        res.json({success:false,message:error.message})
    }
    
}

export{addFood,listFood,removeFood}