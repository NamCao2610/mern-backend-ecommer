import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/UserRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

const connectURL = 'mongodb+srv://amazon:maimaiiuem@cluster0.78r0a.mongodb.net/amazonDB?retryWrites=true&w=majority'
mongoose.connect(connectURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err, client) => {
    if (err) {
        return console.log('KEt noi that bai');
    }

    console.log('Ket noi thamh cong');
})

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})
app.get('/', (req, res) => {
    res.send('Nam dep zai');
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

app.listen(port, () => {
    console.log('Server dang chay port ', port);
})