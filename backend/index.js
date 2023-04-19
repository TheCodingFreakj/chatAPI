const express = require("express");
const path = require("path");
var cors = require('cors');
const app = express();
const PORT = 5000 || process.env.PORT;
const chatRoutes = require("./routes/chat");

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
// app.use(express.static(__dirname + '/dist'));
// app.get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));

app.use("/", chatRoutes);

app.listen(PORT, console.log("Server don start for port: " + PORT));
