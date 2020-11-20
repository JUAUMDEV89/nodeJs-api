const mongoose = require('mongoose');

try{
    mongoose.connect(process.env.DATABASE_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Database Running width sucess");
}catch(err){
    console.log("Error Dtabase Acess: " + err);
}
module.exports = mongoose;