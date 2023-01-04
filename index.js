require("dotenv").config();
const express = require("express");
const connectToDb = require("./database/db");
const path = require("path");
const Music = require("./model/music");

const app = express();
const port = process.env.PORT || 3000;
let music = null;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

connectToDb();

app.get("/", async (req, res) => {
  const playlist = await Music.find();
  res.render("index", { playlist });
});

app.get("/admin", async (req, res) => {
  const playlist = await Music.find();
  await res.render("admin", { playlist, music: null });
});

app.post("/create", async (req, res) => {
  const music = req.body;
  await Music.create(music);
  res.redirect("/");
});

app.get("/by/:id", async (req, res) => {
  const { id } = req.params;
  music = await Music.findById({ _id: id });
  const playlist = await Music.find();
  res.render("admin", { playlist, music });
});

app.post("/uptade/:id",async(req,res) =>{
  const newMusic = req.body
  await Music.updateOne({_id: req.params.id},newMusic)
  res.redirect("/admin")
}) 


app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port} `);
});
