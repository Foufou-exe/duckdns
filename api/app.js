// Import
import express from 'express';
import cors from 'cors';


// Importation des routeurs
import userRoutes from './routes/userRoutes.js';
import  router  from './routes/articleRoutes.js';

// Importation des middlewares
import notFoundHandler from './middleware/notFoundHandler.js';
import errorHandler from './middleware/errorHandler.js';

// Création de l'application Express
const app = express();

// Activation des middlewares de base
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));


// Using routers
app.use('/api/user', userRoutes);
app.use('/api/article', router);

// Using middleware
app.use(notFoundHandler);
app.use(errorHandler);

export default app;

