import { createDatabaseManager } from '../config';
import { Calendar } from './entities';

export interface CalendarRepository {
    retrieveCalendars(): Promise<Calendar[]>
}

export const calendarRepository: CalendarRepository = {
    retrieveCalendars: async () => {
        const databaseManager = await createDatabaseManager();
        const calendarManager = databaseManager.getRepository(Calendar);

        return await calendarManager.find();
    }
}