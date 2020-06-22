var expect = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(
        "Assertion failed: " + assertionToCheck + " is not truthy"
      );
    }
  },

  isFalse: function (assertionToCheck) {
    if (assertionToCheck) {
      throw new Error(
        "Assertion Failed: " + assertionToCheck + " is not falsy"
      );
    }
  },
};
