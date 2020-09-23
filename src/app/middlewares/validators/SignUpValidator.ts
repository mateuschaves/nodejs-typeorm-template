import { check } from "express-validator";

const postRules = () => [
  // check("number")
  //   .exists()
  //   .withMessage("Messagem de erro")
  //   .isNumeric()
  //   .withMessage("Messagem de erro"),
];

export default { postRules };
