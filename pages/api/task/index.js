import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

export default async(req,res)=>{
    const {method}=req;

    //connect to database
    await dbConnect();

    //Create task
    if(method==="POST"){
        try{
            const newTask=await new Task(req.body).save()
            res.status(200).json({data:newTask,message:"Task added successfully"})

        }
        catch(err){
            res.status(500).json({message:"Internal Server Error"})
            console.log(err)

        }
    }

    //Get all Tasks
    if(method==="GET"){
        try{
            const tasks=await Task.find();
            res.status(200).json({data:tasks})


        }
        catch(err){
            res.status(500).json({message:"Internal Server Error"})
            console.log(err)

        }
    }
}