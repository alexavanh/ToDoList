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

app.get("/today", (req, res) => {
    res.render("today.ejs");
});

app.get("/work", (req, res) => {
    res.render("work.ejs");
});

app.post("/today", (req, res) => {
    if (req.body["dTask"] != "") {
        dArr.push(req.body["dTask"]);
    }
    res.render("today.ejs", {
        daysTasks: req.body["dTask"],
        dArr: dArr
    });
});

app.post("/work", (req, res) => {
    if (req.body["wTask"] != "") {
        wArr.push(req.body["wTask"]);
    }
    res.render("work.ejs", {
        workTasks: req.body["wTask"],
        wArr: wArr
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});