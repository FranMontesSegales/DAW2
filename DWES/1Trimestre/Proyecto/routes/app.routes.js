const productsController = require("../controllers/controller");
const express = require("express");
const router = express.Router();

// Create 
router.post("/products", productsController.create);

// Update 
router.put("/products/:id", productsController.update);

// // delete
router.delete("/products/:id", productsController.delete);

module.exports = router;