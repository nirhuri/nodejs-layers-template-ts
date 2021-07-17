import IResponse from "../../interfaces/response/response";

export default class Result<T> implements IResponse<T> {
  data: T | null;
  message: string | null;
  error: string | null;
  isSuccess: boolean;

  constructor(
    data: T | null,
    message: string,
    error: string,
    isSuccess: boolean
  ) {
    this.data = data;
    this.message = message;
    this.error = error;
    this.isSuccess = isSuccess;
  }
}
