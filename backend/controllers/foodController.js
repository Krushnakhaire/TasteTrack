import foodModel from "../models/foodModel.js";

import fs from "fs";

//add food item

const addFood=async(req,res)=>{

    let image_filename=`${req.file.image_filename}`;

    const food =new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename

    })
    try{

    }catch(error){

    }

}
export{addFood}