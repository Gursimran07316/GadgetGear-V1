import express from 'express';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
const port = process.env.PORT || 5001;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);
app.use(cookieParser)
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
