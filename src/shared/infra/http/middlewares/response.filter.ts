import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";

export default function (err: AppError, req: Request, res: Response, next: NextFunction) {
    res.status(err.statusCode).json({ error: err.message });
}