const express = require('express');
const { addImage, getImages } = require('../controllers/product.controller');

let router=express.Router();

// route.post("/images",addImage)
// route.get("/images",getImages)

router.route("/images").post(addImage).get(getImages);

module.exports=router;

