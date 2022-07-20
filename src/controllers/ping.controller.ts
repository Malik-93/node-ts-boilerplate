import { Get, Route } from "tsoa";
import * as dotenv from 'dotenv';
dotenv.config();
interface PingResponse {
  message: string;
}

@Route("ping")
export default class PingController {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    return {
      message: `${process.env.PROJECT} pong`,
    };
  }
}
