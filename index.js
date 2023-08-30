import express from "express";

const app = express();
const port = 3000;

//const arr = [];

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/", (req, res) => {
    //arr.push()
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});