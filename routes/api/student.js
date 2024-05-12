const express = require("express");
let router = express.Router();
let Userinfo = require("../../models/students");

router.get("/list", async function(req, res) {
    try {
        let student = await Userinfo.find();
        res.render("student", { student: student});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); 

module.exports = router;