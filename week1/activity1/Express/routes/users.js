const express = require("express");
const router = express.Router();
router.get("/",(req,res) => {
    res.send("Users List");
});
router.get("/new",(req,res) => {
    res.send("New Users List");
});
router.get("/:id",(req,res) => {
    res.send(` New Users List ${req.params.id}`);
});
module.exports = router;