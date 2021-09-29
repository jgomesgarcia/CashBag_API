import express from "express";
import {HellowMundo} from '../controllers'

const router = express.Router();

router.get("/", HellowMundo)

export default router