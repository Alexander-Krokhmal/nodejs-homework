const mongoose = require("mongoose");

const connectMongo = async () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_HOST, {
        userNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database connection successful");
};

module.exports = {
    connectMongo,
  };