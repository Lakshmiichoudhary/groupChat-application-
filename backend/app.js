const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./utils/database'); 
require('dotenv').config();

// Routes
const userRoute = require("./routes/user")
const chatRoute = require("./routes/chat")

const app = express();

const corsOptions = {
  origin: '*', 
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use("/user",userRoute);
app.use('/chat',chatRoute);

sequelize.sync({force : false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening at port ${PORT}`);
    });
  })
  .catch(err => {
    console.error(err);
  });
