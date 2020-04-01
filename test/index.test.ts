import _jest from 'ts-jest';
import hello from '../src';

test("should return Hello world!", () => {
    expect(hello("world")).toBe("Hello world!")
})
