import _jest from 'jest';
import { mocked } from 'ts-jest/utils'
import { calendarControllerV1 } from '../../src/controllers'
import { Request, Response } from 'express';
import { calendarRepository } from '../../src/repositories/calendar';

jest.mock('../../src/repositories/calendar');

test("Should return calendars", async () => {
    const mockRequest = {} as Request;
    const mockResponse = {} as Response;
    const mockRepoistory = mocked(calendarRepository, true)
    mockRepoistory.retrieveCalendars.mockReturnValue(Promise.resolve([{id: 1, name: "family"}]));
    
    const actual = await calendarControllerV1.getCalendars(mockRequest, mockResponse, () => {});
    expect(actual).toStrictEqual([{id: 1, name: 'family'}]);
});

