import express from 'express';
import { loginUser, userProfile } from '../controller/userController.js';

const Router = express.Router();

Router.post('/login', loginUser);
Router.get('/profil', userProfile);

export default Router;
