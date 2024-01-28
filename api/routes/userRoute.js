import { Router } from "express";

import {RegisterController, LoginController} from "../controllers/UserController.js";
import {registerValidation} from "../services/Validation/Validator.js";


export const userRoute = Router();

userRoute.post("/register",registerValidation, RegisterController)
userRoute.post("/login", LoginController)
