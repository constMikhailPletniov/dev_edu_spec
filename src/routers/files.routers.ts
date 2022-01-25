import express from "express";
import fileController from '../controllers/files.controllers';

const router = express.Router();

router.post('/images', fileController);

export default router;