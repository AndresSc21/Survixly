import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();
const userController = new UserController();

export function setUserRoutes(app) {
    app.use('/api/users', router);

    router.post('/register', userController.register);
    router.post('/login', userController.login);
    router.get('/:id', userController.getUserById);
    router.put('/:id', userController.updateUser);
    router.delete('/:id', userController.deleteUser);
}