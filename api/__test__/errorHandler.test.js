import errorHandler from '../middleware/errorHandler';

describe('Error Handler Tests', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  test('should log error stack and send 500 status with error message', () => {
    const mockError = new Error('Test error');
    const mockRequest = {};
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    const mockNext = jest.fn();

    errorHandler(mockError, mockRequest, mockResponse, mockNext);

    expect(console.error).toHaveBeenCalledWith(mockError.stack);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith("Something's gone wrong!");
    expect(mockNext).not.toHaveBeenCalled();
  });
});
