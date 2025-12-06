const express = require("express");
const path = require("path");
const data = require("./data.json");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get('/', (req, res) => {
    res.render("index", { data });
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${ port }`);
})