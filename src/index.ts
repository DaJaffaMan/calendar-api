import express from "express";
import { calendarController } from './controllers'
import responseResolver from './utils/response-resolver'

function startServer() {
    const app = express();
    const port = process.env.CALENDAR_API_PORT || 3000;

    app.set('Content-Type', 'application/json')
    app.get('/calendars', calendarController.getCalendars);
    
    app.use(responseResolver)
    app.listen(port);
}

startServer();