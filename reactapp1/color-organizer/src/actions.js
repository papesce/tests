import fetch from 'isomorphic-fetch'

const parseResponse = response => response.json()

const logError = error => console.error(error)

const fetchAndDispatch = (dispatch, url, method, body) =>
    fetch(url, {method, body,
        headers: { 'Content-Type': 'application/json' }})
        .then(parseResponse)
        .then(dispatch)
        .catch(logError)

export const addColor = (title, color) => dispatch =>
        fetchAndDispatch(
            dispatch,
            '/api/colors',
            'POST',
            JSON.stringify({title, color})
        )

export const removeColor = id => dispatch =>
        fetchThenDispatch(
            dispatch,
            `/api/color/${id}`,
            'DELETE'
        )
    
export const rateColor = (id, rating) => dispatch =>
        fetchThenDispatch(
            dispatch,
            `/api/color/${id}`,
            'PUT',
            JSON.stringify({rating})
        )
    