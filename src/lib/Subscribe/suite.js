import { create, test, enforce, only } from 'vest';
// learn: `warn` youtu.be/X2PuiawaGV4?t=959
// learn: `skipWhen` youtu.be/X2PuiawaGV4?t=959
import pkg from 'validator';
const { isEmail } = pkg;
//import { doesUserExist } from './api.js';


enforce.extend({ isEmail });

const suite = create((data = {}, currentField) => {

  only(currentField);

  test("nome", "necessario", () => {
    enforce(data.nome).isNotBlank(); // learn: vestjs.dev/docs/enforce/enforce_rules#isnotblank
  });

  test("nome", "di almeno 3 caratteri", () => {
    enforce(data.nome).longerThan(3); // learn: vestjs.dev/docs/enforce/enforce_rules#longerThan
  });

  /* fix: type="email" address, indirizzo */
  test("_replyto", "necessario", () => {
    enforce(data._replyto).isNotBlank(); // learn: vestjs.dev/docs/enforce/enforce_rules#isnotblank
  });

  test("_replyto", "non valido", () => {
    enforce(data._replyto).isEmail();
    // learn: vestjs.dev/docs/enforce/creating_custom_rules#reusable-custom-rules-with-enforceextend
    // learn: `npm i validator`: codesandbox.io/s/vest-react-tutorial-finished-ztt8t?file=/src/validate.js:929-1021
    // learn: github.com/ealush/vest/issues/712
  });


  /********* EXAMPLE ********
  test("username", "is required", () => {
    enforce(data.username).isNotBlank();
    / / learn: vestjs.dev/docs/enforce/enforce_rules#isnotblank
  });

  test("username", "must be at least 3 characters", () => {
    enforce(data.username).longerThan(3);
    / / learn: vestjs.dev/docs/enforce/enforce_rules#longerThan
  });


  skipWhen(suite.get().hasErrors("username"), () => {
    / / learn: `async validation` youtu.be/X2PuiawaGV4?t=808
    test("username", "is already taken", () => doesUserExist(data.username));
  });

  test("password", "is required", () => {
    enforce(data.password).isNotBlank();
    / / learn: vestjs.dev/docs/enforce/enforce_rules#isnotblank
  });

  test("password", "must be at least 3 characters", () => {
    enforce(data.password).longerThanOrEquals(3);
    / / learn: vestjs.dev/docs/enforce/enforce_rules#longerthanorequals
  });

  test("password", "too weak. Try entering a number", () => {
    / / learn: vestjs.dev/docs/writing_tests/warn_only_tests
    warn()
    enforce(data.password).matches(/[0-9]/);
    / / learn: vestjs.dev/docs/enforce/enforce_rules#matches
  });
  ********* EXAMPLE ********/




  // fix: hint
  test("terms", "STRING", () => {
    enforce(data.terms).isTruthy();
  });

});

export default suite;
