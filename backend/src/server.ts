import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import api from './api/index.api';

dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// api endpoint
app.use('/api',api)


app.listen(PORT, () => console.log(`surver running at port ${PORT}`));