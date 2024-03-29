
const Data = require("../models/Library");


exports.createData = async(req,res) => {
    try {
            const {Title,Author,ISBN,PublicationDate} = req.body;
            
            if (
                !Title ||
                !Author||
                !ISBN||
                !PublicationDate
              ) {
                return res.status(403).send({
                  success: false,
                  message: "All Fields are required",
                })
              }

              
            const response = await Data.create({Title,Author,ISBN,PublicationDate});

            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}
