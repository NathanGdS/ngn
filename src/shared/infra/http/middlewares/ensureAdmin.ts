import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsuarioRepository } from "@modules/accounts/infra/typeorm/repositories/UsuarioRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAdmin(
    request: Request| any,
    response: Response,
    next: NextFunction
) {
    const usuario = request.usuario;

    if (!usuario) {
        throw new AppError("Not Authenticated!", 401);
    }
    try {

        if (usuario.isAdmin != true) throw new AppError("Unauthorized!");
        next();
    } catch (e) {
        throw new AppError("Unauthorized!", 403);
    }
    
}