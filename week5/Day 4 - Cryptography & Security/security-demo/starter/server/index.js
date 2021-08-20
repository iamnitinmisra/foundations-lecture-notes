const express = require("express");
const cors = require("cors");
const { createMessage } = require("./controllers/ctrl");

const app = express();
app.use(express.json());
app.use(cors());

const serverPort = 4004;

app.post("/api/messages", createMessage);

app.listen(serverPort, () => {
  console.log(`Server listening on port ${serverPort}`);
});
