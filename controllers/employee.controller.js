const Employee = require('../models/employee.model');

let addEmployee=async (req,res,next)=>
{
    try
    {
        let {}=req.body;
        let employee=await Employee.create(req.body);
        res.json({error:false,message:"Employee Added Successfully",data:employee});
    }
    catch(err)
    {
        next(err)
    }
}

let getEmployees=async (req,res,next)=>
    {
        try
        {
            let employees=await Employee.find();
            res.json({error:false,message:"Employee Fetched Successfully",data:employees});
        }
        catch(err)
        {
            next(err)
        }
    }

    let getSingleEmployee=async (req,res,next)=>
        {
            try
            {
                let {eid}=req.params; //! eid must be _id 
                let isEmployee=await Employee.findById(eid);

                if(isEmployee)
                {
                    return res.json({error:false,message:"Employee Fetched Successfully",data:employee});
                }
                return res.json({error:true,message:"Np Employee Found With Given Id",data:null});
            }
            catch(err)
            {
                next(err)
            }
        }
    
        let updateEmployee=async (req,res,next)=>
            {
                try
                {
                    let {eid}=req.params; //! eid must be _id 
                    let isEmployee=await Employee.findById(eid);
    
                    if(isEmployee)
                    {
                        let employee=await Employee.findByIdAndUpdate(eid, {fn:''}, {runValidators:true,new:true})
                        return res.json({error:false,message:"Employee Updated Successfully",data:employee});
                    }
                    return res.json({error:true,message:"Np Employee Found With Given Id",data:null});
                }
                catch(err)
                {
                    next(err)
                }
            }

            let deleteEmployee=async (req,res,next)=>
                {
                    try
                    {
                        let {eid}=req.params; //! eid must be _id 
                        let isEmployee=await Employee.findById(eid);
        
                        if(isEmployee)
                        {
                            let employee=await Employee.findByIdAndDelete(eid)
                            return res.json({error:false,message:"Employee Deleted Successfully",data:employee});
                        }
                        return res.json({error:true,message:"Np Employee Found With Given Id",data:null});
                    }
                    catch(err)
                    {
                        next(err)
                    }
                }
            
        

    module.exports={
        addEmployee,
        getEmployees,
        getSingleEmployee,
        updateEmployee,
        deleteEmployee
    }