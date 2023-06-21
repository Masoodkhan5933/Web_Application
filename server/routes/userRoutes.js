import express from 'express';
import { getUsers, addUser, deleteUser, updateUser } from '../controller/usersController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);
router.delete('/:userId', deleteUser);
router.put('/:userId', updateUser);

export default router;