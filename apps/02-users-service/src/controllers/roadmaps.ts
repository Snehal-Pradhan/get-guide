import type { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "roadmaps controller is healthy" });
}

export const getAllRoadmaps = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "all roadmaps fetched successfully" });
}

export const getRoadmapById = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "roadmap fetched successfully" });
}

export const createRoadmap = (req: Request, res: Response): any => {
    return res.status(201).json({ message: "roadmap created successfully" });
}

export const updateRoadmap = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "roadmap updated successfully" });
}

export const deleteRoadmap = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "roadmap deleted successfully" });
}

export const getRoadmapStats = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "roadmap stats fetched successfully" });
}

export const getRoadmapCourses = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "roadmap courses fetched successfully" });
}
