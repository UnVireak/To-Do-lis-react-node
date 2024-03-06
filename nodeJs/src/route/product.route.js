const productRoute = require("../controller/product.controller")

const product = (app)=>{
    app.get("/api/product/:pro_id", productRoute.getOne);
    app.get("/api/product", productRoute.getAll);
}

module.exports =product;