
(function(exports) {
    function NoteListView(notelist) {
        this.frame = notelist;
    }

    NoteListView.prototype.returnHTML = function() {
        var array = this.frame.returnNote()
        var output = ""
        if (array.length == 1) {
          output = `<ul><li><div>${array[0].returnText()}</div></li></ul>`
        }
        // array.forEach(function(note) {
        //   output += `<ul><li><div>${note.returnText()}</div></li></ul>`
        // })
        return output
    }
    exports.NoteListView = NoteListView;
})(this);
