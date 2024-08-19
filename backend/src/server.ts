import express from 'express';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import cors from 'cors';
import { corsOptions } from './config/corsConfig';
import api from './api/index.api';

dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

// api endpoint
app.use('/api',api)


app.listen(PORT, () => console.log(`surver running at port ${PORT}`));