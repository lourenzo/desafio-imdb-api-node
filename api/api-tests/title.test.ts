import request from "supertest";
import app from "../src/app";

describe("Title Resource", () => {
  test("Create Title", async () => {
    const response = await request(app.callback())
      .post("/titles")
      .send({
        name: "Jão da Sirva",
      })
      .expect(200);
    expect(true).toBe(true);
  });
});
