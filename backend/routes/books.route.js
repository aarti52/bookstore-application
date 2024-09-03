import getbook from "../controller/books.controller.js";
import express from "express";

const router=express.Router();

router.get('/',getbook)
export default router