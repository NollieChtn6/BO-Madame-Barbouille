// Useful resource: how to set up TS with Node and Express: https://dev.to/cristain/how-to-set-up-typescript-with-nodejs-and-express-2023-gf
import express, { Application } from 'express';

require('dotenv').config();
const cors = require('cors');
const app: Application = express();
import router from './src/routers/router';

app.use(
  cors({
    // Allow frontend development servers only
    origin: ['http://localhost:5173', 'http://localhost:5174'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Welcome to my Express + TS Server');
// });

app.listen(process.env.PORT, () => {
  console.log(`App listening on: http://localhost:${process.env.PORT}`);
});
