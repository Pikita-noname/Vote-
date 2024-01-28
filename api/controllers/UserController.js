import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import UserModel from "../models/User.js";

export const RegisterController = async (req, res) => {
  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(403).json(err.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(11);
    const passwordHash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      phone: req.body.phone,
      name: req.body.name,
      passwordHash: passwordHash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "69df8b70e8d204e2fc6b52aceeb8748a815f7ef5",
      {
        expiresIn: "30d",
      }
    );

    res.json({
      success: true,
      response: {
        token: token,
        user,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Ошибка обработки запроса",
    });
  }
};

export const LoginController = async (req, res) => {
  try {
    const user = await UserModel.findOne({ phone: req.body.phone });
    if (!user) throw new Error("Такого пользователя не существует");

    const salt = await bcrypt.genSalt(11);
    const passwordHash = await bcrypt.hash(req.body.password, salt);
    if (user.passwordHash !== passwordHash)
      throw new Error("Пароли не совпадают");

    const token = jwt.sign(
      {
        phone: req.body.phone,
        name: req.body.name,
      },
      "69df8b70e8d204e2fc6b52aceeb8748a815f7ef5"
    );

    res.json({
      success: true,
      response: token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Ошибка обработки запроса " + err,
    });
  }
};
