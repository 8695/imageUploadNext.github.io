const mongoose =require('mongoose');
require('dotenv').config();

async function mongoConnection(){
    // await mongoose.connect(process.env.MONGOOSE_URL);
    await mongoose.connect(process.env.MONGOOSE_URL);
}

mongoConnection()
.then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(err);
})

module.exports = mongoConnection;
