const mongoose = require('mongoose');

 async function connectDB(){
    try {
        const connection = await mongoose.connect('mongodb+srv://KK:10396kkk@cluster0.ihiy3al.mongodb.net/todo-part2');
        console.log("connected to DB ...")
    } catch (error) {
        console.log("error in connnecting to database " , error)
    }
}

module.exports={
    connectDB
}