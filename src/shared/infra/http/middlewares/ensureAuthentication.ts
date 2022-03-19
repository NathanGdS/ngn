import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsuarioRepository } from "@modules/accounts/infra/typeorm/repositories/UsuarioRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "b4ddc8b02b9225adefaf038e65036138"
        ) as IPayload;

        const usersRepository = new UsuarioRepository();
        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User doesn't exists!", 401);
        }

        request.usuario = {
            id: user_id,
        };

        console.log(request.usuario);

        next();
    } catch (e) {
        throw new AppError("Token Invalid!", 401);
    }
}