import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/UserRouter.js';
import productRouter from './routers/productRouter.js';

const app = express();

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

app.get('/', (req, res) => {
    res.send('Nam dep zai');
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

app.listen(port, () => {
    console.log('Server dang chay port ', port);
})