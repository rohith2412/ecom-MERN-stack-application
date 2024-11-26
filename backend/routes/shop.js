const express = require('express');
const router = express.Router();
const productModel = require('../models/productModel');

    router.get('/shop', async (req, res) => {
        try {
            const products = await productModel.find();
            res.status(200).json(
              products.map((product) => ({
                ...product.toObject(),
                picture: product.picture.toString('base64'), // Convert Buffer to Base64
              }))
            );
          } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ error: 'Failed to fetch products' });
          }
      });


  
module.exports = router;
