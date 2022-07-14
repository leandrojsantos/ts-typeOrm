import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.index);

productsRouter.post('/', celebrate({[Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().required().precision(2),
      quantity: Joi.number().required(),
    },
  }),
  productsController.create,
);

productsRouter.get('/:id', celebrate({[Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsController.show,
);

productsRouter.put('/:id', celebrate({[Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }, [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().required().precision(2),
      quantity: Joi.number().required(),
    },
  }),
  productsController.update,
);

productsRouter.delete('/:id', celebrate({[Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsController.delete,
);

export default productsRouter;
