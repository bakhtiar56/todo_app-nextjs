import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

export default async(req,res)=>{
    const {method}=req;
    const {id}=req.query;

    //connect to database
    await dbConnect();

    //Update task by id
    if(method==="PUT"){
        try{
            const result=await Task.findByIdAndUpdate(id,{$set:req.body},{new:true})
            res.status(200).json({data:result,message:"Task updated successfully"})

        }
        catch(err){
            res.status(500).json({message:"Internal Server Error"})
            console.log(err)

        }
    }

    //Delete Tasks
    if(method==="DELETE"){
        try{
        await Task.findByIdAndDelete(id);
        res.status(200).json({message:"Task Deleted Successfully"})


        }
        catch(err){
            res.status(500).json({message:"Internal Server Error"})
            console.log(err)

        }
    }
}