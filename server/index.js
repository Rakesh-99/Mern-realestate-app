import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT
import router from './routes/routes.js';





app.use(express.json());
app.use('/v1', router);


app.listen(PORT, () => {
    console.log(`App is listening at PORT ${PORT}`)
})