import express from 'express';
import dotenv from 'dotenv'
import post from './api/posts'


dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded())


app.use('/api',post)

app.listen(PORT, () => console.log(`surver running at port ${PORT}`));