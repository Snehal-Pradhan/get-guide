import type { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "profile controller is healthy" });
}

export const getProfile = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "profile fetched successfully" });
}

export const createProfile = (req: Request, res: Response): any => {
    return res.status(201).json({ message: "profile created successfully" });
}

export const updateProfile = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "profile updated successfully" });
}

export const deleteProfile = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "profile deleted successfully" });
}

export const getStats = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "stats fetched successfully" });
}