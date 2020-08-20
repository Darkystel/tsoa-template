import { Controller, Get, Route } from "tsoa";
import { TemplateService } from "@services/TemplateService";

@Route("test")
export class TemplateController extends Controller {
  @Get()
  get(): string {
    const service = new TemplateService();
    return service.get();
  }
}
