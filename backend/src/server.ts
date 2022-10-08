import { errorsHandler } from './middlewares/exceptions/exceptions.middleware';
import express, { Application } from 'express';
import cors from 'cors';
import { API, ENV } from './common/enums'
import { marvelСharacters } from './routes';

const app: Application = express()

app
    .use(cors({ origin: "*" }))
    .use(express.json());

app.use(`${API.BASE}`, marvelСharacters);

app.use(errorsHandler);

app.listen(ENV.PORT, function () {
    console.log(`App is listening on port ${ENV.PORT} !`)
});