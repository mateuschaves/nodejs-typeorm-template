import { Router } from "express";

const routes = Router();

import { SignInController, SignUpController } from "./controllers";

import { SignInValidator, SignUpValidator } from "./middlewares/validators";

routes.post(
  "/auth/signin",
  SignInValidator.postRules(),
  SignInController.store
);
routes.post(
  "/auth/signup",
  SignUpValidator.postRules(),
  SignUpController.store
);

export default routes;
