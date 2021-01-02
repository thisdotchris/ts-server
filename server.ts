import express, { Application } from 'express';
import http, { Server } from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';

export const app: Application = express();

app.use(morgan('tiny'))
app.use(compression());
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

export const server: Server = http.createServer(app);