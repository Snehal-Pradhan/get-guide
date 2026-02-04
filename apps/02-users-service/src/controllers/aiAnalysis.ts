import type { Request, Response } from "express";

export const analysis = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "analysis controller is healthy" });
}