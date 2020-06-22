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

function canReturnStoredNotesInNoteArray() {
  let noteList = new NoteList();
  let note = new Note("hello");
  let anotherNote = new Note("Yo");
  noteList.addNote(note);
  noteList.addNote(anotherNote);
  expect.isTrue(noteList.returnNote()[0] === note )
  expect.isTrue(noteList.returnNote()[1] === anotherNote)
}
canReturnStoredNotesInNoteArray();