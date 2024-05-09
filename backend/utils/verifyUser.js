import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if(!token) return next(errorHandler(401, "Unauthorized"));

    jwt.verify(token, "s58544h24234a98987h34234e09098d", (error, user)=>{
        if(error) return next(errorHandler(403, "Forbidden"));
        req.user = user;
        next();
    });

};