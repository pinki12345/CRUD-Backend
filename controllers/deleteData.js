
const Data = require("../models/Library");



exports.deleteData = async(req,res) => {
    try {
        const {id} = req.params;

        await Data.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Data DELETED",
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
