const env = require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.set("view engine", "ejs");
app.use(express.static(path.join( __dirname, "fonthend")));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/creat", (req, res) => {
    res.send(req.body);
});


app.listen(port, () => console.log(`sarver is start in port no ${port}`));