const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./utils/database'); 
require('dotenv').config();

// Routes
const userRoute = require("./routes/user")

const app = express();

app.use(cors());
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;

app.use("/user",userRoute)

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening at port ${PORT}`);
    });
  })
  .catch(err => {
    console.error(err);
  });
