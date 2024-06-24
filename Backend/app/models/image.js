
const mongoose = require('mongoose');


const imageData = new mongoose.Schema({
    image: { 
        type: String, 
        required: true 
    },
    imageName:{
        type:String,
        required: true 

    }
})

const Images = mongoose.model('Images',imageData)
module.exports=Images;
