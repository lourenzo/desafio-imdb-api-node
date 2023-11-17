import { HttpError } from "routing-controllers";
import { ZodError } from "zod";

export default class UnprocessableEntityError extends HttpError {
  constructor(private zodError: ZodError) {
    super(422);
    Object.setPrototypeOf(this, UnprocessableEntityError);
  }

  toJSON() {
    return {
      status: this.httpCode,
      message: "Unprocessable Entity. Error validating request input.",
      errorDetails: this.zodError,
    };
  }
}
