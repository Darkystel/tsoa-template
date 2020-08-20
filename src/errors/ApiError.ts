export default class {
  status: number = 500;
  message: string = "";
  constructor(status?: number, message?: string) {
    this.status = status || this.status;
    this.message = message || this.message;
  }
}
