const 	expr 		= require("express"); 
const	fs			= require("fs");
module.exports = function(){
	const app = expr();
	// app.use(expr.static(__dirname + 'public'));
	app.use('/static', expr.static(__dirname + '/public'));
	app.use('/root', expr.static(__dirname + '/../'));
	app.get("/", (req, res) => {
		res.sendFile(__dirname+ "/index.html");
	});
	app.get("/", (request, response) => {
		response.sendStatus(200);
	});
	// app.get("/var", (req, res) => {
	// 	res.sendFile(__dirname+ "../variable.json");
	// });
	// app.get("/var", (request, response) => {
	// 	response.sendStatus(200);
	// });
	app.get("/log.txt",(request, response) => {
		logs=fs.readFileSync(__dirname +"./../log.txt", "utf8")
		// response.sendFile(__dirname +"/../logs.txt");
	});

	
	app.listen(process.env.PORT||5000);
}