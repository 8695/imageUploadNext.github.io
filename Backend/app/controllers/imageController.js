const imageService= require('../services/service');

const imageUploadController=(req,res)=>{
    imageService.uploadImageService(req,res);

}

const showImageControllers=(req,res)=>{
    imageService.showImageService(req,res);
}

module.exports ={imageUploadController,showImageControllers};