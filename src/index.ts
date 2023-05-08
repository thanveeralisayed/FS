import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';



const app = express();
dotenv.config();

const mongoUrl = process.env.MONGO_URL;

app.use(cors({
    credentials: true,
}))


app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);


server.listen(8080,()=>{
    console.log('server started');
})

mongoose.Promise = Promise;
mongoose.connect(mongoUrl);
mongoose.connection.on('error',(error:Error)=>console.log(error));


