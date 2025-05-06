import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./config/mongodb.js"
import connenctCloudinary from './config/cloudinary.js';
import userRouter from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import reservationRoute from "./routes/reservationRoute.js";
dotenv.config()
 

const app = express();
const PORT = process.env.PORT || 4000;

connectDB()
connenctCloudinary()
app.use(cors());
app.use(express.json());

app.use('/api/user',userRouter)
app.use('/api/product',productRoute)
app.use('/api/reservations', reservationRoute)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT,()=> console.log('server is running on port' + PORT));
