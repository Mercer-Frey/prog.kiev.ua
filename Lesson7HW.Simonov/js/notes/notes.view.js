;
(function (window) {

    window.NotesView = function () {};

    NotesView.prototype.render = function (renderCommand, data) {
        var renderCommands = {
            showNotes: function () {
                let showNotesList = document.querySelector('.notes');
                if (showNotesList.getAttribute("data-module") === 'notes') {
                    for (let i = 0; i < data.length; i++){
                      showNotesList.innerHTML +=
                        `<div class="listItem"><p class="notesNum">${data[i].id}
                        </p><p class="notesText">${data[i].text}</p></div>`;
                    }
                }

            }
        };
        renderCommands[renderCommand]();
    }

}(window));