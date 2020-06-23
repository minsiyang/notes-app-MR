
function constructsWithAnNoteListModel() {
    let list = new NoteList();
    let view = new NoteListView(list);
    expect.isTrue( view.frame instanceof NoteList );
  }
  constructsWithAnNoteListModel();

function returnHTMLStringNoNote() {
    let list = new NoteList();
    let view = new NoteListView(list);
    expect.isTrue( view.returnHTML() === "")
}
returnHTMLStringNoNote();

function returnHTMLStringOneNote() {
    let list = new NoteList();
    let view = new NoteListView(list);
    list.addNote("Rae");
    expect.isTrue( view.returnHTML() === "<ul><li><div>Rae</div></li></ul>")
}
returnHTMLStringOneNote();
