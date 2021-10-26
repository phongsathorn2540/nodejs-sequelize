const express = require("express");

const app = express();
const port = 3000;
const { team } = require("./sequelize");
app.use(express.json());

app.get("/team", async function (req, res) {
  let data = await team.findAll();
  res.json(data);
});

app.get("/team/:id", async function (req, res) {
  let id = req.params.id;
  let data = await team.findOne({
    where: { id: id },
  });
  if (!data) {
    res.json({ message: "team id " + id + "not found", status: "success" });
  } else {
    res.json({ message: data, status: "success" });
  }
});

app.post("/team", async function (req, res) {
  try {
    let teamName = req.body.name;
    let teamCreate = await team.create({
      name: teamName,
    });
    if (!teamCreate) {
      res.json({ message: "error", status: "fail" });
    }
    res.json({ message: "create success", status: "success" });
  } catch (error) {
    res.json({ message: error, status: "fail" });
  }
});

app.put("/team/:id", async function (req, res) {
  try {
    let teamId = req.params.id;
    let teamName = req.body.name;
    let teamUpdate = await team.update(
      { name: teamName },
      {
        where: { id: teamId },
      }
    );
    if (!teamUpdate) {
      res.json({ message: "error", status: "fail" });
    }
    res.json({ message: "update success", status: "success" });
  } catch (error) {
    res.json({ message: error, status: "fail" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
