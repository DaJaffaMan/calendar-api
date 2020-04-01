import _jest from 'jest';
import {calendarController} from '../../src/controllers'
import { Request, Response } from 'express';

test("Should return calendars", async () => {
    const mockRequest = {} as Request
    const mockResponse = {} as Response;
    const actual = await calendarController.getCalendars(mockRequest, mockResponse, () => {})

    expect(actual).toStrictEqual([{name: 'fam'}])
});

