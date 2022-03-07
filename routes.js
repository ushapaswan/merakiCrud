var express = require("express")
var router = express.Router();

var {
    courselist,
    addcourse,
    course,
    courseupdate,
    deletecourse,
}= require("../controllers/index");
var bodyParser = require("body-parser");
var urlencodeparser =bodyParser.urlencoded({extended:false});

router.use(bodyParser.json());

// router.get("/",(req,res)=>{
//     res.send("home page is called")
// })

router.post("/add",addcourse);
router.get("/list",courselist);
router.get("/info/:id",course);
router.put("/update/:id",courseupdate);
router.delete("/delete/:id",deletecourse);
module.exports=router;