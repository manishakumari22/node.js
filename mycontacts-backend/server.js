const express=require("express");

const app= express()
const port=  8000;//create all of your environment variables, written in thr NAME=value format. For example, you could set a port variable to 3000 like this: PORT=3000.
app.get("/api/contacts", (req , res) => {
    res.send("get all contact");

});
app.listen(port,() => {
    console.log(`server running on port ${port}`);
});