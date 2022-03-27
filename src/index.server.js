const express = require("express");
const env = require("dotenv");
const { body } = require("express-validator");
const app = express();
// const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require("path");
const cors = require('cors');

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const pageRoutes = require("./routes/admin/page");
const initialDataRoutes = require('./routes/admin/initialData');


//environment variable or you can say constants
env.config();

//mongodb connection
//mongodb+srv://flipcartroot:<password>@cluster0.vqj5m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// getting-started.js

mongoose.connect('mongodb+srv://flipcartroot:startnow@cluster0.vqj5m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                    {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true,
                        useFindAndModify: false
                    }
                ).then(() => {
                    console.log('Database connected!!!');
                }).catch((e) => {
                    console.log('Not connected to database ===>', e)
                })


app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello from Server'
    });
});

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
});

app.use(cors())
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', initialDataRoutes);
app.use('/api', pageRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
