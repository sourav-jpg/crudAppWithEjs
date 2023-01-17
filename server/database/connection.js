const mongoose = require('mongoose');
mongoose.set("strictQuery",false);



const connectDb = async ()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log(`MongoDB connected successfully`);

    }catch(err){
        console.log(err);
        process.exit(1);

    }
};

module.exports =  connectDb