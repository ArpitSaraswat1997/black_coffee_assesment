const mongoose =require("mongoose")


mongoose.connect("mongodb://localhost:27017/Oil_DataBase")
.then(()=>{
    console.log("connection Suceesfull");

})
.catch((err)=>{
    console.log("Connection fail");
})