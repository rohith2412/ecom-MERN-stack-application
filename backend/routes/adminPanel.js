const express = require('express');
const multer = require('multer');
const router = express.Router();
const productModel = require('../models/productModel');


const upload = multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: 5 *1024 *1024},
})
router.post('/adminPanel', upload.single('picture'), async (req, res) => {
    try {
        
        const {name, price} = req.body;
        const picture = req.file;

        if(!name || !price || !picture) {
            res.json({error: "all fields are required"})
        }

        const productCreated = await productModel.create({
            product: {name, price},
            picture: picture.buffer,
        })
        res.status(201).json({message: "created succesfully"}),
        console.log(productCreated)
  

    } catch (error) {
        re.json({message: "error"})
    }
})

module.exports = router;