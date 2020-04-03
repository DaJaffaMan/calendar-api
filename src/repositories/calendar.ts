import { createDatabaseManager } from '../config';
import { Calendar } from './entities';

export interface CalendarRepository {
    retrieveCalendars(): Promise<Calendar[]>
    createCalendar(calednar: Calendar): Promise<Calendar>;
}

export const calendarRepository: CalendarRepository = {
    retrieveCalendars: async () => {
        const databaseManager = await createDatabaseManager();
        const calendarManager = databaseManager.getRepository(Calendar);

        return await calendarManager.find();
    },
    createCalendar: async (calendar: Calendar) => {
        const databaseManager = await createDatabaseManager();
        const calendarManager = databaseManager.getRepository(Calendar);

        const a = await calendarManager.save(calendar);

        console.log(a);
        return a;
    }
}