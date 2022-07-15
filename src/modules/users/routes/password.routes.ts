import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ForgotPasswordController from '../controllers/ForgotPasswordController.';
import ResetPassowrdController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPassowrdController = new ResetPassowrdController();

passwordRouter.post('/forgot', celebrate({[Segments.BODY]: {
    email: Joi.string().email().required(),
  },
}),
  forgotPasswordController.create,
);

passwordRouter.post('/reset', celebrate({[Segments.BODY]: {
    token: Joi.string().uuid().required(),
    password: Joi.string().required(),
    password_confirmation: Joi.string().required().valid(Joi.ref('password')),
  },
}),
  resetPassowrdController.create,
);

export default passwordRouter;
