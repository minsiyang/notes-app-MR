function constructingWithTheGivenString() {
    let string = "My favorite language is JavaScript."
    let note = new Note(string);
    expect.isTrue(note.text === string);
  }
  constructingWithTheGivenString();
  