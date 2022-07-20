import PingController from './ping.controller';
import * as dotenv from 'dotenv';
dotenv.config();

test("should return pong message", async () => {
  const controller = new PingController();
  const response = await controller.getMessage();
  expect(response.message).toBe(`${process.env.PROJECT} pong`)
})