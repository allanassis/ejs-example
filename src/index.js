const ejs = require("ejs")

const filename = "./static/body.ejs"
const data = {header : "header text", body : "body text", footer: "footer text"}
ejs.renderFile(filename, data, function(err, str){
    if(err){
        console.error(err)
    }
    console.log(str)
});
