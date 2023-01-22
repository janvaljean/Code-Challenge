// <!-- JS-CC-04 : Email Validator
// The purpose of this coding challenge is to create a function that will check the given email address valid or not.

// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// analyze a problem, identify and apply programming knowledge for appropriate solution.

// demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

// Problem Statement
// Write a function that takes email variable and return true or false and write console invalid or valid.

// Valid characters in the email address will be 'abcdefghijklmnopqrstuvwxyz0123456789_+.@' P.S. : Capital letters are allowed.

// An email should not start with '@' symbol and should not contain more than one '@' sign.

// There should be at least two characters after the '.' sign. (like .co or .com)

// There should be at least one '. after the '@' sign.

// For examples:

// name.last_Name@company.com -> 🆗 Valid
// name.143@company.co -> 🆗 Valid
// name.last-Name@company.com -> ❌ Dashes are not allowed
// name.last_Name@company.c -> ❌ There should be at least two characters after the '.' sign.
// name.last_Name@company -> ❌ There should be at least one '. after the '@' sign.

// ⌛ Happy Coding ✍ -->
const ValidateEmail = (mail) => (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\-\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(mail) ? true : false;
    

console.log(ValidateEmail("name.last_Name@company.c"));