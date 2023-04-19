const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI


module.exports = function(){
    mongoose.set('strictQuery', true)
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      mongoose.connection.once("open", () => {
        console.log("Connected to MongoDB!");
      });
}