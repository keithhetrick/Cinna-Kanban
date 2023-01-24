require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.OUR_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

require("./config/mongoose.config");

const taskRoutes = require("./routes/task.routes");
taskRoutes(app);
const memberRoutes = require("./routes/member.routes");
memberRoutes(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
