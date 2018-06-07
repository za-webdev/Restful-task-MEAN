let UserController = require("../controllers/controllers.js");

module.exports =(app)=>{
	app.get("/tasks",UserController.all);
	app.get("/tasks/:id",UserController.findById);
	app.delete("/tasks/:id",UserController.destroy);	
	app.put("/tasks/:id",UserController.update);	
	app.post("/tasks",UserController.create);
}
