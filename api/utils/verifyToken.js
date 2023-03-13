import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token; // access_token is the name of the cookie given during login 
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  // now if token is present its not neccessary that it is valid, so we need to verify it
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user; // here in req.user can keep any name instead of user and its storing the info i.e id and isAdmin from jwt.sign
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => { // to verify the user first it must be authenticated
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
