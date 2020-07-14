/* Password Validation

Write a program that should check if each password in the input array 
contains a valid password by satisfying below criterias and return a
new array with "true" or "false" booleans denoting which password is
acceptable.

Criterias:
  1) A password must 
    - Have at least 5 characters.
    - Have at least one English uppercase letter (A-Z)
    - Have at least one English lowercase letter (a-z)
    - Have at least one number (0-9)
    - Have at least one non-alphanumeric symbols ("!", "#", "$", "%", ".")

  2) Passwords must not be any previous password in the passwords input array.

Example:

Let's assume function receive following passwords
 ["tytT3729.", "fhD!yrjj", "ttkTuwer3", "DVYYEYY!5", "qwbfj76%", "Pl3!", "tytT3729.", "12qw"]

Expected result after validation should be
 [true, false, false, false, false, false, flase, false]

The belows are invalids because
  - "fhD!yrjj"  doesn't contain number
  - "ttkTuwer3" doesn't contain special symbol
  - "DVYYEYY!5" doesn't contain lowercase letter
  - "qwbfj76%"  doesn't contain uppercase letter
  - "Pl3!"      doesn't contain at least 5 characters
  - "tytT3729." is valid as an individual password, but already appeared in the password array
  - "12qw"      doesn't contain uppercase letter, special symbol and less than 5 characters long
*/

const validator = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{5,})"
);

function validatePasswords(passwords) {
  let result = passwords.map((items) => validator.test(items));
  console.log(result);
  return result;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"];
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  arraysEqual(validatePasswords(passwords1), [false, false, true, false, false])
);

test(
  "validatePasswords function works - case 2",
  arraysEqual(validatePasswords(passwords2), [true, true, false, false, false])
);
