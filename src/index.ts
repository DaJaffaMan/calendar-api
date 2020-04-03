import express from "express";
import { calendarControllerV1 } from './controllers'
import responseResolver from './utils/response-resolver'

function startServer() {
    const app = express();
    const port = process.env.CALENDAR_API_PORT || 3000;

    app.set('Content-Type', 'application/json')
    app.get('/v1/calendars', calendarControllerV1.getCalendars);
    app.post('/v1/calendars/:name', calendarControllerV1.createCalendar)
    
    app.use(responseResolver)
    app.listen(port);
}

startServer();