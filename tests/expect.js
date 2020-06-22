var expect = {
  isTrue: function (expectationToCheck) {
    if (!expectationToCheck) {
      throw new Error(
        "Expectation failed: " + expectationToCheck + " is not truthy"
      );
    }
  },

  isFalse: function (expectationToCheck) {
    if (expectationToCheck) {
      throw new Error(
        "Expectation Failed: " + expectationToCheck + " is not falsy"
      );
    }
  },
};
