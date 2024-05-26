const express = require("express");
const db = require("./routes/db-config");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 5000;



// Static file serving
app.use("/views", express.static(__dirname + "/views"));
app.use("/public", express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));

// Require your mail-verification route
const mailVerificationRoute = require('./routes/mail-verification');

// Use the routes in your application
app.use('/', mailVerificationRoute);


// View engine setup
app.set("view engine", "ejs");
app.set("views", "./views");

// Cookie and JSON parsing middleware
app.use(cookieParser());
app.use(express.json());

// Database connection
db.connect((err) => {
    if(err) throw err;
    console.log("Database connected");
});

// Routes
app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"));

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
