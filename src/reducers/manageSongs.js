import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageSongs( state = {
    
    songs: [],
    comments: [],
}, action) {
    switch (action.type) {

    case 'ADD_SONG':

        const song = { text: action.text, id: cuidFn() }
        return {...state, 
            songs: [ ...state.songs, song ] 
        }

    case 'DELETE_SONG':
        const songs = state.songs.filter(song => 
            song.id !== action.id)
        return { ...state, songs }

    case 'ADD_COMMENT':
        const comment = {text: action.text, id: cuidFn() }
        return {...state,
            comments: [...state.comment, comment]}
    
    case 'REMOVE_COMMENT':
        const comments = state.comments.filter(comment => 
            comment.id !== action.id)
        return {...state, comments }

        default: 
        return state
    }
}
