const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const SALT_ROUNDS = 10;

const dbPromise = open({
  filename: "data.db",
  driver: sqlite3.Database,
});

const app = express();

app.use(express.json());
app.use(cors())
app.use("/public", express.static("public"));

app.get("/", async (req, res) => {
  const db = await dbPromise;
  const messages = await db.all("SELECT * FROM Quote;");
  res.send(messages);
});

app.get("/mentor", async(req, res) => {
  const db = await dbPromise;
  const messages = await db.all("SELECT * FROM mentor;");
  res.send(messages);
})

app.post("/message", async (req, res) => {
  try {
    const db = await dbPromise;
    const text = req.body.text;
    const mentor = req.body.mentor;
    console.log(req.body);
    await db.run("INSERT INTO Quote (mentor, text) VALUES (?,?);", [
      mentor,
      text,
    ]);
    res.send("sent!");
  } catch (e) {
    console.log(e);
  }
});

app.get("/time", (req, res) => {
  res.send("the current time is " + new Date().toLocaleTimeString());
});

const setup = async () => {
  const db = await dbPromise;
  await db.migrate();
  app.listen(8000, () => {
    console.log("listening on http://localhost:8000");
  });
};
setup();
