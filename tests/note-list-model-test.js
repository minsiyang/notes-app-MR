function constructsWithAnEmptyArray() {
  let noteList = new NoteList();
  expect.isTrue(typeof noteList.notes === "object");
}
constructsWithAnEmptyArray();

function canStoreNotesInNoteArray() {
  let noteList = new NoteList();
  let note = new Note("hello");
  noteList.addNote(note);
  expect.isTrue(noteList.notes[0] === note);
}
canStoreNotesInNoteArray();
