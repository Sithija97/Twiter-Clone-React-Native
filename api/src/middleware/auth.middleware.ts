import { NextFunction, Request, Response } from "express";

export const protectRoute = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  if (!req.auth().isAuthenticated) {
    return res
      .status(401)
      .json({ message: "Unauthorized - you must be logged ins" });
  }
  next();
};
