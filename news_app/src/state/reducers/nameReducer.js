const reducer = (state = 'guest', action) => {
    if (action.type === 'addname') {
        return action.payload
    }
    else {
        return state;
    }
}


export default reducer