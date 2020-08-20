import ApiError from "./ApiError";

export default class extends ApiError {
  constructor(message?: string) {
    super(403, message);
  }
}
