function constructingWithTheGivenString() {
  let string = "My favorite language is JavaScript.";
  let note = new Note(string);
  expect.isTrue(note.text === string);
}
constructingWithTheGivenString();

function hasMethodToReturnText() {
  let string = "Chris's idea!!";
  let note = new Note(string);
  expect.isTrue(note.returnText() === string);
}
hasMethodToReturnText();
