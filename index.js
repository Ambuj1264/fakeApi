const express =require("express")
const app=express();
const port =8000;
const db=require("./db/connection")
const fileUpload = require('express-fileupload');

const router=require("./router/router");

app.use(fileUpload({
    useTempFiles : true,
}));

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)



app.listen(`${port}` ,()=>{

    console.log("you are listening on ",port )

})