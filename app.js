const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

// configuring ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routings
const defaultRoutes = require("./routes/default.routes");
// routes initiallizer
app.use("/", defaultRoutes);


app.get("/data", (req, res) => {
    const welcome_note = "Welcome To Nude Js";
    res.send("Hello World " + welcome_note);
})

app.listen(7000, () => {
    console.log(`Server is on on port 7000 ${app.settings.env}`)
})