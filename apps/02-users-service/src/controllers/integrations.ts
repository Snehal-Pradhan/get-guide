import type { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "integrations controller is healthy" });
}

export const getAllIntegrations = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "all integrations fetched successfully" });
}

export const enableEmail = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "email integration enabled successfully" });
}

export const disableEmail = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "email integration disabled successfully" });
}

export const enableGoogleCalendar = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "google calendar integration enabled successfully" });
}

export const disableGoogleCalendar = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "google calendar integration disabled successfully" });
}

export const enableWhatsapp = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "whatsapp integration enabled successfully" });
}

export const disableWhatsapp = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "whatsapp integration disabled successfully" });
}

export const setEmailSettings = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "email settings updated successfully" });
}

export const setGoogleCalendarSettings = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "google calendar settings updated successfully" });
}

export const setWhatsappSettings = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "whatsapp settings updated successfully" });
}

export const getEmailSettings = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "email settings fetched successfully" });
}

export const getGoogleCalendarSettings = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "google calendar settings fetched successfully" });
}

export const getWhatsappSettings = (req: Request, res: Response): any => {
    return res.status(200).json({ message: "whatsapp settings fetched successfully" });
}
