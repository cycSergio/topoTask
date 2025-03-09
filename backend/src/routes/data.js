import express from 'express';
import { getAllData, getDataByType } from '../controllers/dataController.js';

const router = express.Router();

router.get('/data', getAllData);
router.get('/data/:file_type', getDataByType);

export default router;
