import { Usuario } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
    user: Usuario;
  }
  

export function ensureRole(allowedRoles: string[]) {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: "Usuário não autenticado" });
    }

    if (!allowedRoles.includes(user.tipo)) {
      return res.status(403).json({ error: "Acesso negado: Usuário sem permissão" });
    }

    return next();
  };
}
