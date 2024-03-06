// const { query } = require("express");
const db = require("../util/db");

const getOne = (req, res) =>{
    var   {pro_id }=req.params

   

    var sqlGet = " SELECT * FROM tbl_product WHERe pro_id=?"

    db.query(sqlGet,[pro_id],(error, rows)=>{
         if(!error){
            res.json({
                data:rows
            })
         }else{
            res.json({
                error:true,
                message:error
            })
         }
    })
}


const getAll =(req, res)=>{
    var sqlSelect = " SELECT * FROM tbl_product"
    db.query(sqlSelect, (error, rows)=>{
        if(!error){
            res.json({
                data:rows
            })
        }else{
            res.json({
                error:true,
                message:error
            })
        }
    }) 
}
module.exports= {
    getOne,
    getAll
}