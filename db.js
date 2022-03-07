let mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Usha@267",
  database: "CRUD"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE meraki (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),  logo VARCHAR(255), notes VARCHAR(255), days_to_complete VARCHAR(255), short_description VARCHAR(255),type VARCHAR(255),course_type VARCHAR(255),lang_available VARCHAR(255)) ";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

const data = require("../controler/saral_data.json");
// console.log(data);

for (i of data){
  const name =i.name
  const logo =i.logo
  const notes = i.notes
  const days_to_complete = i.days_to_complete
  const short_description = i.short_description
  const type = i.type
  const course_type = i.course_type
  const lang_available = i.lang_available
  const values = [[name,logo,notes,days_to_complete,short_description,type,course_type,lang_available]]
  console.log(values);
  var sql = "INSERT INTO meraki (name, logo, notes, days_to_complete,short_description,type,course_type,lang_available) VALUES ?";
// // values.push(data)
con.query(sql,[values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});

}

