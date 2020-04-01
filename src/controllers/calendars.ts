
import { CalendarController } from "../api/calendar";
import { Request, Response, NextFunction } from "express";
import { Calendar } from "../models";

export const calendarController: CalendarController = {
    getCalendars: async (req: Request, _res: Response, next: NextFunction) => {
        const calendars = [{name: 'fam'}];
        req = storeCalendarData(req, calendars);
        next();
        return Promise.resolve(calendars);
    }
}

function storeCalendarData(req: Request, calendars: Calendar[]): Request {
    req.data = {
        calendars
    }

    return req;
}