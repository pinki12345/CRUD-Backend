const express  = require("express");
const router = express.Router();


const {createData,book} = require("../controllers/createData");
const {getData, getDataById} = require("../controllers/getData");
const {updateData} = require("../controllers/updateData");
const {deleteData} =  require("../controllers/deleteData");


router.post("/createData", createData);
router.get("/getData", getData);
router.get("/getData/:id", getDataById);
router.put("/updateData/:id", updateData);
router.delete("/deleteData/:id", deleteData);

router.get("/get",book)

module.exports = router;