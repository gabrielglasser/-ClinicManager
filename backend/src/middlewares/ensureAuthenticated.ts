import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface TokenPayload {
    id: string;
    email: string;
    tipo: string;
    iat: number;
    exp: number;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token não fornecido" });
    }

    //pegar o token sem o bearer
    const [, token] = authHeader.split(" ");

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
        req.user = {
            id: decoded.id,
            email: decoded.email,
            tipo: decoded.tipo
        };
        return next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido" });
    }
}