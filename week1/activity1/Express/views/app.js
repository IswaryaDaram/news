const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/",(req,res) => {
    res.send("Hello");
});

app.post("/post",(req, res) => {
    const { id, name }=req.body;
    console.log("Received Data");
    res.send("Received Data");
});
app.listen(port,() => {
    console.log(`listening on port ${port}`);
});
