type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'BAD_REQUEST';

type ServiceResponseSuccessType = 'SUCCESSFUL' | 'GET_SUCCESSFUL';

export type ServiceResponseError = {
  status: ServiceResponseErrorType, 
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: ServiceResponseSuccessType, 
  data: T | T[] 
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;