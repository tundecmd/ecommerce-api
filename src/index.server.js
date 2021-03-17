const express = require("express");
const env = require("dotenv");
const { body } = require("express-validator");
const app = express();
// const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");


//environment variable or you can say constants
env.config();

//mongodb connection
//mongodb+srv://flipcartroot:<password>@cluster0.vqj5m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// getting-started.js

mongoose.connect('mongodb+srv://flipcartroot:startnow@cluster0.vqj5m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
                    {   
                        useNewUrlParser: true, 
                        useUnifiedTopology: true,
                        useCreateIndex: true
                    }
                ).then(() => {
                    console.log('Database connected!!!');
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

app.use(express.json())
app.use('/api', authRoutes)
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);    
}); 