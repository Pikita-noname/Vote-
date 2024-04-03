import { Router } from "express";

import {RegisterController, LoginController} from "../controllers/UserController.js";
import {registerValidation} from "../services/Validation/Validator.js";


export const userRoute = Router();

userRoute.post("/register", RegisterController)
userRoute.post("/auth", LoginController)
