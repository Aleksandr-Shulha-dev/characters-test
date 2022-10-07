import express, { Application } from 'express';

import cors from 'cors';
import multer from 'multer';
import { API } from './common/enums'
import { marvelСharacters } from './routes';


const app: Application = express()

const port: number = 3001;

app
    .use(cors({ origin: "*" }))
    .use(express.json());

app.use(`${API.BASE}`, marvelСharacters);


app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
});