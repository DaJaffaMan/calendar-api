import _jest from 'jest';
import { calendarControllerV1 } from '../../src/controllers'
import { Request, Response } from 'express';

test("Should return calendars", async () => {
    const mockRequest = {} as Request
    const mockResponse = {} as Response;
    const actual = await calendarControllerV1.getCalendars(mockRequest, mockResponse, () => {})

    expect(actual).toStrictEqual([{name: 'fam'}])
});

