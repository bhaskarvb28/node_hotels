const express = require('express')
const router = express.Router();


const MenuItem = require('../models/MenuItem');

router.get('/', async(req, res)=> {
    try{
      const data = await MenuItem.find();
      console.log('Data fetched')
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error: "Internal Server Error"});
    }
})

router.post('/', async(req, res) => {
    try{
        const data = req.body
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('Data Saved')
        res.status(200).json(response);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
})

router.get('/:taste', async (req, res) => {
  try {
    const foodTaste = req.params.taste;
    if(foodTaste == 'sweet' || foodTaste == 'sour' || foodTaste == 'spicy') {
      const response = await MenuItem.find({taste: foodTaste})
      console.log(foodTaste, 'foods fetched')
      res.status(200).json(response);
    } else {
      res.status(404).json("Invalid taste");
    }
  } catch (err) {
      console.log(err);
      res.status(500).json({error: "Internal Server Error"});
  }
})


// Comment Added for testing purpose
module.exports = router;