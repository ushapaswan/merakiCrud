var mysql = require("mysql")
var con = mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "database":"CRUD",
    "password":"Usha@267"
})

con.connect(function(err){
    if(err) throw err; 
    console.log("connnected");
})

var courselist = (req,res)=>{
    var sql = "select * from meraki";
    con.query(sql,function(err,result){
        if(err)throw err;
        res.status(200).json(result);
    })
}

var addcourse = (req,res)=>{
    console.log(req.body);
    con.query("INSERT INTO meraki set ?",[req.body],function(err,result){
        if(err) throw err;
        res.status(200).json({message:"inserted",
                                last_inserted:result.insertID,
                                course:req.body
                            });
    })   
}

var course = (req,res)=>{
    con.query("SELECT * FROM meraki WHERE id = ?",[req.params.id],function(err,result){
        if(err)throw err;
        res.status(200).json(result);
    })
}

var courseupdate = (req,res)=>{
    var data = [req.body]
    console.log(data);
    // con.query("update userTable set username = ?, password=?, email=? WHERE id=?",[req.body.username,req.body.password,req.body.email,req.params.id],function(err,result){

    con.query("update meraki set name = ?,logo = ?,notes = ?,days_to_complete = ?, short_description = ?, type = ?, course_type = ?,lang_available = ? WHERE id=?",[req.body.name,req.body.logo,req.body.notes,req.body.days_to_complete,req.body.short_description,req.body.type,req.body.course_type,req.body.lang_available,req.params.id],function(err,result){
        console.log(req.body.name);
        if(err) throw err;
        res.status(200).json({message:"updated",
                              updated_course:data
    });
    })   
}

var deletecourse = (req,res)=>{
    con.query("delete from meraki where id = ?",[req.params.id],function(err,result){
        if(err) throw err;
        res.status(200).json({message:"deleted",
                              deleted_course_id:req.params.id
    });
    })   
}



module.exports={
    courselist,
    addcourse,
    course,
    courseupdate,
    deletecourse,
    
}