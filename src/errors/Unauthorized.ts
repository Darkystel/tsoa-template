import ApiError from "./ApiError";

export default class extends ApiError {
  constructor(message?: string) {
    super(401, message);
  }
}
