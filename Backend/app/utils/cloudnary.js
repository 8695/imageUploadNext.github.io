const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET
});

const uploadOnCloudinary = async (localPath) => {
    console.log(localPath);
    try {
        if (!localPath) {
            return null;
        }

        const response = await cloudinary.uploader.upload(localPath, {
            resource_type: "auto"
        });

        console.log("File uploaded successfully", response.url);
        fs.unlinkSync(localPath); // Delete the local file
        return response;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
    }
}

module.exports = { uploadOnCloudinary };
