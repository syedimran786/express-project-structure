const {Schema,model} = require('mongoose');

let EmployeeSchema=new Schema({
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    role:
    {
        type:String,
        required:true,
        enum:["hr administrator","hr manager","hr generalist","recruiter",
            "hiring manager","talent acquisition","employee","manager","team lead",
            "admin"
        ]
    }
})

module.exports=model("employees",EmployeeSchema)