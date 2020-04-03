
import { CalendarController } from "../api/calendar";
import { Request, Response, NextFunction } from "express";
import { Calendar } from "./models";
import { calendarRepository } from '../repositories/calendar';

export const calendarControllerV1: CalendarController = {
    getCalendars: async (req: Request, _res: Response, next: NextFunction) => {
        const calendarEntities = await calendarRepository.retrieveCalendars();
        const calendars: Calendar[] = calendarEntities.map(entity => {
            return {
                id: entity.id!,
                name: entity.name
            }
        })
        req = populateRequestData(req, calendars);
        next();
        return Promise.resolve(calendars);
    }
}

function populateRequestData(req: any, calendars: Calendar[]): Request {
    req.data = {
        calendars
    }

    return req;
}