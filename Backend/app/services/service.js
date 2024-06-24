const Images= require('../models/image');
const cloudinary = require('../utils/cloudnary');

const uploadImageService =async (req,res)=>{
     const {imageName}=req.body;
     console.log("imagesName",imageName);

     const image=req.file;
     console.log("image",image);
     try{
        if(!imageName || !image){
            return res.status(400).send({ success:false,message:"Please provide image name and image file"})
        }
        else{
            const uploadResponse = await cloudinary.uploadOnCloudinary(image.path);

            const newImage = new Images({
                imageName,
                image:uploadResponse.secure_url
     });
            await newImage.save()
            return res.status(201).send({success:true,message:"image upload successfully"});
        }
        
        
     }catch(error){
        console.log(error)
         res.status(400).send({success:false,message:" error upload in image "});
     }

}

const showImageService =async(req,res)=>{
    try{
       const data=await Images.find({});
       console.log("-===",data)
       res.status(200).send({success:true,message:"get images successfully",data});
    }
    catch(error){
        console.log(error);
       res.status(500).send({success:false,message:" error in fetching images "})
    }
}

module.exports={uploadImageService,showImageService};