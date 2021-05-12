export const SET_AUTHED_USER='SET_AUTHED_USER'
export const SET_UNAUTHED_USER='SET_UNAUTHED_USER'

export function setAuthedUser(id){
    return{
        type:SET_AUTHED_USER,
        id,
    }
}

export function setUnauthedUser(){
    return{
        type:SET_UNAUTHED_USER,
    }
}