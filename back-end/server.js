const express = require("express");

const server = express();
const cors = require("cors");
require("./config/config");
server.use(express.json());
server.use(cors());

const plantrouter = require("./routes/plantRoutes");
const userrouter = require("./routes/userRoutes");
const cartrouter = require("./routes/cartRoutes");
server.use("/api/plants", plantrouter);
server.use("/api/users", userrouter);
server.use("/api/cart", cartrouter);
server.listen(3000, () => {
  console.log("Server running");
});
