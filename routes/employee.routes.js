const express = require('express');
const {  
    addEmployee,
    getEmployees,
    getSingleEmployee,
    updateEmployee,
    deleteEmployee } = require('../controllers/employee.controller');

let router=express.Router();

route.post("/addemp",addEmployee)
route.get("/getemps",getEmployees)
route.get("/getemp/:eid",getSingleEmployee)
route.put("/updateemp/:eid",updateEmployee)
route.delete("/deleteemp/:eid",deleteEmployee)

module.exports=router;

