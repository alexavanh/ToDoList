import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const dArr = [];
const wArr = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    if (req.body["dTask"] != "") {
        dArr.push(req.body["dTask"]);
    }
    if (req.body["wTask"] != "") {
        wArr.push(req.body["wTask"]);
    }
    res.render("index.ejs", {
        daysTasks: req.body["dTask"],
        workTasks: req.body["wTask"],
        dArr: dArr,
        wArr: wArr
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});