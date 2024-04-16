import {PORT} from './config.js'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bookRoutes from './routes/booksRoute.js'
import getdata from './routes/getdata.js'

const app = express()
app.use(cors());
app.use('/books', bookRoutes);
app.use(getdata);
app.use(express.json())


app.get('/', (req,res)=>{
    res.status(200).send("Welcome Over here")
})


mongoose.connect('mongodb://127.0.0.1:27017/bookCollection').then(()=>{
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
})
;