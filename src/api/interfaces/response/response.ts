export default interface IResponse<T> {
  data: T | null;
  message: string | null;
  error: string | null;
  isSuccess: boolean;
}
