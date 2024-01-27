export enum ResponseStatus {
  SUCCESS = 'success',
  FAIL = 'fail',
}

export interface BaseResponse {
  message?: string;
  status: ResponseStatus;
  page?: number;
  total?: number;
  last_page?: number;
}
