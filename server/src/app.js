const express =require("express")
const app = express();
require("./db/conn")
const OilData = require("../src/models/data");
const router = require("./routes/httpreq");
app.use(express.json());

const port = process.env.PORT || 3000;




app.use(router)

app.listen(port,()=>{
    console.log(`connection is succesfully done ${port}`);
})