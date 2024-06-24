const express = require("express");

const router=express.Router();
const controllerImage= require('../app/controllers/imageController')

const {uploadFile} = require('../app/utils/fileUpload');

const upload=uploadFile();


router.route('/upload').post(upload,controllerImage.imageUploadController);
router.route('/images').get(controllerImage.showImageControllers);

module.exports=router;

