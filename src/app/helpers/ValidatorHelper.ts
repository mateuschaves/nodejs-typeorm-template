import { validationResult } from "express-validator";

class Validation {
  hasErrors(req) {
    return new Promise((resolve, reject) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        reject(errors.array());
      } else {
        resolve();
      }
    });
  }
}

export default new Validation();
