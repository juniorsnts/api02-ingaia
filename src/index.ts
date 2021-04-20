import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import ImmobileRouter from './routes/immobile';
import middlewares from './middlewares';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const options: Options = {
  definition: {
    info: {
      title: 'API02 INGAIA',
      version: '1.0.0',
    },
  },
  apis: ['**/*.ts'],
};

// middlewares
app.use(middlewares);

// swagger server
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

// routes
app.use('/immobile', ImmobileRouter);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
