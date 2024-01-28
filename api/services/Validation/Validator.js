import { body } from "express-validator";

export const registerValidation = [
    body("name").isLength({ min: 3 }),
    body("password").isLength({ min: 6 }),
    body("phone").isMobilePhone("ru-RU")
]
