import User from "../models/User.js";

export const createInitialUser=async(req,res)=>{
    
        const {username,password}=req.body;
        if(!username || !password){
            return res.status(400).json({message:'Username and password are required'});
        }
        console.log('Received user data:', req.body);
        try{
            const existingUser=await User.findOne({username});
            if(existingUser){
                return res.status(400).json({message:'Username already exists'});
            }
            const user= await User.create({username,password});
            res.status(201).json({message:'User created successfully',user});
        }catch(error){
            console.error('Error creating user:',error);
            res.status(500).json({message:'Internal server error'});
        }   
}
export const loginUser = async (req, res) => {
    const {username, password} = req.body;


    if (!username || !password) {
        return res.status(400).json({message: 'Username and password are required'});
    }
   
    try{
    const user = await User.findOne({username, password});
    if (!user) {
        return res.status(401).json({message: 'Invalid credentials'});
    }


    res.json({message: 'Login success', user});
   
    } catch (error) {
        res.status(500).json({message: 'Server error', error});
    }
}

