import { ValidationComposite } from "./ValidationComposite";
import { ValidationEmail } from "./ValidationEmail";
import { ValidationString } from "./ValidationString";

const validation = new ValidationComposite();
const validationEmail = new ValidationEmail();
const validationString = new ValidationString();
validation.add(validationEmail, validationString);

const string1 = "abc";
const string2 = 20;
const string3 = "ab@ab";

console.log(validation.validate(string1));
console.log(validation.validate(string2));
console.log(validation.validate(string3));
