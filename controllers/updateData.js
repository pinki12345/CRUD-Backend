
const Data = require("../models/Library");



exports.updateData = async(req,res) => {
    try {
        const {id} = req.params;
        const {Title,Author,ISBN,PublicationDate} = req.body;

        const data = await Data.findByIdAndUpdate(
            {_id:id},
            {Title,Author,ISBN,PublicationDate,updatedAt: Date.now()},
        )

        res.status(200).json({
            success:true,
            data:data,
            message: `Updated Successfully`,
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
