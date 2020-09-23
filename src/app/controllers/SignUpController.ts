import { Request, Response } from "express";
import { ValidationHelper } from "../helpers";

export default class SignUpController {
  static async store(request: Request, response: Response) {
    try {
      await ValidationHelper.hasErrors(request);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
