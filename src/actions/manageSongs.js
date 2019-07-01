export const fetchSongs = () => {
    return (dispatch) => {
        dispatch({ type: 'LOAD_SONGS' });
        return fetch('https://localhost:3001/api')
        .then(response => response.json())
        .then(songs => dispatch({ type: 'ADD_SONGS', songs }))
    }
}

export const retrieveSongs = () => {
    return {
        type: 'LOAD_SONGS'
    }
}
