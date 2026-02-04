import type { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "file controller is healthy" });
}

export const uploadFile = (req: Request, res: Response): any => {
    return res.status(201).json({ message: "file uploaded successfully" });
}

export const getFile = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "file fetched successfully" });
}

export const getFiles = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "files fetched successfully" });
}

export const renameFile = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "file renamed successfully" });
}

export const deleteAllFiles = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "all files deleted successfully" });
}

export const deleteFile = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "file deleted successfully" });
}

export const getFilesCount = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "file count fetched successfully" });
}