function constructsWithAnEmptyArray() {
  let noteList = new NoteList();
  expect.isTrue(typeof noteList.notes === "object");
}
constructsWithAnEmptyArray();
