function constructsWithAnEmptyArray() {
  let noteList = new NoteList();
  expect.isTrue(typeof noteList.notes === "object");
}
constructsWithAnEmptyArray();

function canStoreNotesInNoteArray() {
  let noteList = new NoteList();
  noteList.addNote("note");
  expect.isTrue(typeof noteList.notes[0] === "object");
}
canStoreNotesInNoteArray();

function canReturnStoredNotesInNoteArray() {
  let noteList = new NoteList();
  noteList.addNote("note");
  noteList.addNote("anotherNote");
  expect.isTrue(noteList.returnNote()[0].text === "note");
  expect.isTrue(noteList.returnNote()[1].text === "anotherNote");
}
canReturnStoredNotesInNoteArray();
