import { Usuario } from "@prisma/client";
import { Request, Response, NextFunction } from "express";


interface CustomRequest extends Request {
    user: Usuario;
  }
  

export function ensureRole(roles: string[]) {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    const userRole = req.user?.tipo;

    if (!userRole) {
      return res.status(401).json({ error: "Usuário não autenticado" });
    }

    if (!roles.includes(userRole)) {
      return res.status(403).json({ error: "Acesso negado: Usuário sem permissão" });
    }

     next();
  };
}
