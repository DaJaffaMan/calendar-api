
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
        req.data = calendars;
        next();
        return Promise.resolve(calendars);
    },
    createCalendar: async (req: Request, _res: Response, next: NextFunction) => {
        const calendarEntity = await calendarRepository.createCalendar({name: req.params.name});
        
        const calendar = {
                id: calendarEntity.id!,
                name: calendarEntity.name
        };

        req.data = calendar
        next();
        return Promise.resolve(calendar)
    }
}