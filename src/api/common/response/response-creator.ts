import Response from "./response";

export default class ResponseCreator {
  static CreateSuccessResponse<T>(data: T) {
    return new Response(data, "Request Handled Successffuly.", "None", true);
  }

  static CreateErrorResponse(error: string) {
    return new Response(null, "Can't Handle Request.", error, false);
  }
}
