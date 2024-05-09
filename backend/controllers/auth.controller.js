import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  // console.log(req.body);
  const { userName, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ userName, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Invalid Password"));
    }

    const token = jwt.sign(
      { id: validUser._id },
      "s58544h24234a98987h34234e09098d"
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign(
        { id: user._id },
        "s58544h24234a98987h34234e09098d"
      );
      const { password: pass, ...rest } = user._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const hashPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({ userName: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4), email: req.body.email, password: hashPassword, avatar: req.body.photo });
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id },
        "s58544h24234a98987h34234e09098d"
      );
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User Signed Out Successfully")
  } catch (error) {
    next(error)
  }

}
