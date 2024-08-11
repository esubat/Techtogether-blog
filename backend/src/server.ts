import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.PORT

app.get('/', (req,res) => {
    res.send({msg:"hello it is working ..."});
})

app.listen(PORT, () => console.log(`surver running at port ${PORT}`));