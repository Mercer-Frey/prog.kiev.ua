;
(function (window) {

    var NOTES_LIST = [{
            id: 1,
            text: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 6,
            text: 'Lorem ipsum dolor sit amet'
        },
                {
            id: 7,
            text: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 8,
            text: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 9,
            text: 'Lorem ipsum dolor sit amet'
        }

    ]

    window.NotesModel = function () {}

    NotesModel.prototype.getNotes = function (cb) {
        cb(NOTES_LIST);
    }

    NotesModel.prototype.addNote = function (newNoteText) {
        var note = {
            id: new Date(),
            text: newNoteText
        }
        NOTES_LIST.push(note);
    }

}(window));