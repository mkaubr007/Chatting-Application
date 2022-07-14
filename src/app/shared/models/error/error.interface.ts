export interface IErrorResponse {
  error: string;
  message: string;
  class?: string;
  statusCode?: number;
  status?: number;
}

export interface Success {
  data: any;
  class?: string;
  message: string;
  statusCode?: number;
  status?: number;
}