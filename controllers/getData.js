
const Data = require("../models/Library");



exports.getData = async(req,res) => {
    try {
            
            const data = await Data.find({});

      
            res.status(200)
            .json({
                success:true,
                data:data,
                message:"Entire Data is fetched",
            });
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
       
    }
}


exports.getDataById = async(req, res) => {
    try {
  
       const id = req.params.id;
       const data = await Data.findById( {_id: id})


       if(!data) {
        return res.status(404).json({
            success:false,
            message:"No Data Found with Given Id",
        })
       }
      
       res.status(200).json({
        success:true,
        data:todo,
        message: `Data ${id} successfully fetched`,
       })

    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    
    }
}
