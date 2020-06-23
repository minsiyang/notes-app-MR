
function constructsWithAnNoteListModel() {
    let list = new NoteList();
    let view = new NoteListView(list);
    expect.isTrue( view.frame instanceof NoteList );
  }
  constructsWithAnNoteListModel();

function returnHTMLString() {
    let list = new NoteList();
    let view = new NoteListView(list);
    expect.isTrue( view.returnHTML() === "")
}
returnHTMLString();