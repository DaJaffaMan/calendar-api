import { Calendar } from "../models";
import { Request, Response, NextFunction } from "express";

export interface CalendarController {
    getCalendars(req: Request, res: Response, next: NextFunction): Promise<Calendar[]>;
}