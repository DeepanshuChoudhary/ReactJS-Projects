const ImageKit = require("imagekit");
const mongoose = require("mongoose");

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

const uploadFile = (file) => {

    return new Promise((resolve, reject) => {
        imagekit.upload({
            file:file.buffer,
            // fileName: 'Shubh - Balenci (Official Music Video) [nt5tXl9Vtug].mp3',
            fileName: (new mongoose.Types.ObjectId()).toString(), 
            folder:'Backend-Testing' // create folder
        }, (error,result) => {

            if(error) {
                reject(error)
            }
            else {
                resolve(result);
            }
        })
    });
}

module.exports = uploadFile;