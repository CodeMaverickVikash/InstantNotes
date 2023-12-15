const validator = require("bcryptjs");

const isValidRequest = (req) => {
  const errors = validator.validationResult(req);
  if (!errors.isEmpty()) {
    return {
      isValid: false,
      errors,
    };
  }
  return true;
};

module.exports = {
  isValidRequest,
};
