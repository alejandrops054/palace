import
    {
        ADD_NOTE
    }
from '../types/index'

export function createNewNoteAction(note) {
    return (dispatch) => {
        dispatch( createNote(note) );
    }
}

const createNote = note => ({
    type: ADD_NOTE,
    payload: note
});