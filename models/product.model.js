const {Schema,model} = require('mongoose');

let ImageSchema=new Schema({
    name:
    {
        type:String,
        required:true
    },
    image:
    {
        type:String,
        required:true
    }
})

module.exports=model("image",ImageSchema)