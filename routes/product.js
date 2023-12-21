const express = require("express");
const route = express.Router();

const coffeeRouter = require("../controller/coffeeController");
const machineRouter = require("../controller/machineController");
const accessoryRouter = require("../controller/accessoryController");

route.get("/", coffeeRouter.index);

route.get("/coffee", coffeeRouter.coffee_list);
route.get("/coffee/:id", coffeeRouter.coffee_detail);
route.get("/coffee/create", coffeeRouter.coffee_create_get);
route.post("/coffee/create", coffeeRouter.coffee_create_post);
route.get("/coffee/:id/update", coffeeRouter.coffee_update_get);
route.post("/coffee/:id/update", coffeeRouter.coffee_update_post);
route.get("/coffee/:id/delete", coffeeRouter.coffee_delete_get);
route.post("/coffee/:id/delete", coffeeRouter.coffee_delete_post);

route.get("/machine", machineRouter.machine_list);
route.get("/machine/:id", machineRouter.machine_detail);
route.get("/machine/create", machineRouter.machine_create_get);
route.post("/machine/create", machineRouter.machine_create_post);
route.get("/machine/:id/update", machineRouter.machine_update_get);
route.post("/machine/:id/update", machineRouter.machine_update_post);
route.get("/machine/:id/delete", machineRouter.machine_delete_get);
route.post("/machine/:id/delete", machineRouter.machine_delete_post);

route.get("/accessory", accessoryRouter.accessory_list);
route.get("/accessory/:id", accessoryRouter.accessory_detail);
route.get("/accessory/create", accessoryRouter.accessory_create_get);
route.post("/accessory/create", accessoryRouter.accessory_create_post);
route.get("/accessory/:id/update", accessoryRouter.accessory_update_get);
route.post("/accessory/:id/update", accessoryRouter.accessory_update_post);
route.get("/accessory/:id/delete", accessoryRouter.accessory_delete_get);
route.post("/accessory/:id/delete", accessoryRouter.accessory_delete_post);
