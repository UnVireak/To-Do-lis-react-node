
const express = require ("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));

const product = require("./src/route/product.route")
product(app);

const port = 8081;
app.listen(port, ()=>{
   console.log("http://localhost:"+port)
})