require("dotenv").config();
const mongoose = require("mongoose");
const DB = "mongodb+srv://nidhisingla954:nidhi%401234@cluster0.ml1xdbt.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false ,
      useUnifiedTopology: true
     
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;

//username nidhisingla954
//password mr45Nsk8J653yHzK