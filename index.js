const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

require('dotenv').config();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.listen(process.env.PORT, () => {
    console.log ("URL=" + process.env.MONGODB_URI);
    console.log ("Puerto=" + process.env.PORT)
})
