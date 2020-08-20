import ApiError from "./ApiError";

export default class extends ApiError {
  fields: {
    [key: string]: { message: string };
  } = {};
  constructor(
    fields: { [key: string]: { message: string } },
    message?: string
  ) {
    super(400, message);
    this.fields = fields;
  }
}
