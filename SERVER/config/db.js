import mongoose from 'mongoose';

export const connectDB=async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDb connect successfully');

    }catch(error){
        console.error('MongoDb connection error:',error);
        process.exit(1);
        
    }    
}