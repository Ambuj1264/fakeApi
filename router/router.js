const express=require("express")
const router=express.Router();
const clothes=require("../controler/ClothControler")
const cloudinary = require('cloudinary').v2;


cloudinary.config({ 
    cloud_name: 'dzepo3ahj', 
    api_key: '361849511236691', 
    api_secret: 'mltoKlZetZWH5NiokGqLbYkkjtw' 
  });

router.post("/create", clothes.create)
router.get("/getCloth", clothes.get)

router.post("/mensShoes" ,)


module.exports=router;

