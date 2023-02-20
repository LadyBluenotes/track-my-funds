const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { connect } = require('http2');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./api/routes/expense.routes'));
app.use(require('./api/routes/income.routes'));
app.use(require('./api/routes/user.routes'));

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

app.get('/', (req, res) => {
  res.send('Connected to server.');
});

connectDB().then(() =>{
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});