
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

module.exports=imageData;
