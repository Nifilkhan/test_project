const express = require('express');
const connectDb = require('./config/db.js')
const router = require('./routes/itemRoute.js')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

connectDb();
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 5002;

app.use('/',router)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})