const express = require('express');
const multer = require('multer');
const router = express.Router();
const uploadFile = require('../service/storage.service')
const songModel = require('../models/song.model')

const upload = multer({storage:multer.memoryStorage()});

// router.post('/songs', upload.array('audio'), (req,res) => { // if we have multiple file we have to use [Array]
router.post('/songs', upload.single('audio'), async (req,res) => {
    console.log(req.body)
    console.log(req.file);
    const fileData = await uploadFile(req.file);

    const song = await songModel.create({
        title:req.body.title,
        artist:req.body.artist,
        audio:fileData.url,
        mood:req.body.mood
    })

    console.log(fileData);
    res.status(201).json({
        message:'Song is created successfully',
        song: song
    })
})


module.exports = router; 