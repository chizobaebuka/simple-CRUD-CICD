import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export const UserController = {
    getAll: (req: Request, res: Response) => {
        res.json(UserService.getAll())
    },
    
    getById: (req: Request, res: Response) => {
        const user = UserService.getById(Number(req.params.id));
        user ? res.json(user) : res.status(404).json({ message: 'User not found' });
    },
    create: (req: Request, res: Response) => {
        const { name, email } = req.body;
        const newUser = UserService.create({ name, email });
        res.status(201).json(newUser);
    },
    update: (req: Request, res: Response) => {
        const updated = UserService.update(Number(req.params.id), req.body);
        updated ? res.json(updated) : res.status(404).json({ message: 'User not found' });
    },
    delete: (req: Request, res: Response) => {
        const success = UserService.delete(Number(req.params.id));
        res.status(success ? 204 : 404).end();
    }
};
