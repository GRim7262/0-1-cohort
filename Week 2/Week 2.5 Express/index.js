const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  const numberOfHealthyKidneys = users[0].kidneys.filter((kidney) => {
    return kidney.healthy;
  }).length;
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Post Done!",
  });
});

app.put("/", (req, res) => {
  if (isThereAtLeastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      msg: "Put Done!",
    });
  } else {
    res.status(411).json({
      msg: "All kidneys are healthy already",
    });
  }
});

app.delete("/", (req, res) => {
  if (isThereAtLeastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "Delete Done!",
    });
  } else {
    res.status(411).json({
      msg: "You've no bad kidneys.",
    });
  }
});

const isThereAtLeastOneUnhealthyKidney = () => {
  let atLeastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atLeastOneUnhealthyKidney = true;
    }
  }
  return atLeastOneUnhealthyKidney;
};

app.listen(3000);
