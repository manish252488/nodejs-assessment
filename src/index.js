import express from 'express';
import config from './config';
import routes from './routes';
import http from "http";
import cors from "cors";

import './config/db.config';

const app = express();
app.listen(config.port);
app.use(cors({ origin: true, credentials: true }));
app.use(express.json()).use(express.urlencoded({ extended: true }));
app.use('/api', routes);

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json()).use(express.urlencoded({ extended: true }));
const server = http.createServer(app);
server.on('listening', async () => {
    console.log('SERVER STARTED :: ', config.port);
})
server.on('error', async (err) => {
    console.log('SERVER FAILED TO START :: ', err);
})