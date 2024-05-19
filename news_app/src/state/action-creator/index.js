export const showname = (name)=>{
return (dispatch)=>{
    dispatch({
        type : 'addname',
        payload : name
    })
}
}