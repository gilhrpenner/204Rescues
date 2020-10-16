import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import rescuesController from './controllers/rescuesControllers';

const routes = Router();
const upload = multer(uploadConfig)

routes.get('/rescues', rescuesController.index);
routes.get('/rescues/:id', rescuesController.show);
routes.post('/rescues', upload.array('images'), rescuesController.create);

export default routes;