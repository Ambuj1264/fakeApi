const cloth = require("../model/cloth");

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dzepo3ahj', 
  api_key: '361849511236691', 
  api_secret: 'mltoKlZetZWH5NiokGqLbYkkjtw' 
});

const clothes = {
  create: async (req, res) => {

    try {
      const file=req.files.image;
      const result=await cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
        if(err){
          console.log(err)
          }
          console.log(result)
          }
            
          );
      console.log(result);


      const allClothes = await new cloth({
        title: req.body.title,
        brand:req.body.brand,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: result.url,
        rating: {
          rate: req.body.rate,
          count: req.body.count,
        },
      });
      const savedClothes = await allClothes.save();
      console.log(allClothes);
      res.status(202).json(savedClothes);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: error.message });
    }
  },
  get: async (req, res) => {
    try {
      const allClothes = await cloth.find();
      res.status(202).json(allClothes);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: error.message });
    }
  }
};
module.exports = clothes;
