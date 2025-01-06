const express = require("express");
const app = express();
app.set("view engine","ejs");
app.get("/",(req,res) => {
    console.log("try");
    res.render("index",{text: "ishu"});
});

const useRouter = require("./routes/users");
const postRouter = require("./routes/posts");
app.use("/users",useRouter);
app.use("/posts",postRouter);
app.listen(3002);