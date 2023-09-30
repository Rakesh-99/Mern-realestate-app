import express from 'express';
const router = express.Router();
import { getAllInfo } from '../controller/controller.js';






router.get('/', getAllInfo);





export default router;