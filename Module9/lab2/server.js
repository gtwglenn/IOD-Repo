require("dotenv").config();
const express = require("express");
const app = express();
require("./dbConnect");
require("./models");

app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const cors = require('cors');
app.use(cors());