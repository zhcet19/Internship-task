var express  = require("express"),
app = express();
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
	
	var faq=[{question:"What your company name",answer:"unmazer.ai"},{question:"what your company type",answer:"DataScience "}];
	res.render("faq",{faq:faq});
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});