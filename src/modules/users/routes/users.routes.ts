import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import multer from 'multer';
import uploadConfig from '@config/upload';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UsersAvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const usersAvatarController = new UserAvatarController();

usersRouter.get('/', isAuthenticated, usersController.index);

usersRouter.post('/', celebrate({[Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
}),
  usersController.create,
);

usersRouter.patch('/avatar', isAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update,
);

export default usersRouter;
