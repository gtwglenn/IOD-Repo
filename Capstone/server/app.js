// const express = require("express");
// const app = express();
// const authRoutes = require("./routes/auth");
// require("dotenv").config();

// app.use(express.json()); // For parsing application/json
// app.use("/api", authRoutes); // Routes under /api

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
require("dotenv").config();

app.use(express.json());
app.use("/api", authRoutes);

module.exports = app;



// changes for GIT commit 