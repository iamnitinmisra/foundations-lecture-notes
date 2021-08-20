const express = require("express");
const cors = require("cors");
const ctrl = require("./controllers/ctrl");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

const port = 4004;

//endpoints
app.get("/api/movies", ctrl.getMovies);
app.delete("/api/movies/:id", ctrl.deleteMovie);
app.put("/api/movies/:id", ctrl.editRating);
app.post("/api/movies", ctrl.createMovie);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
