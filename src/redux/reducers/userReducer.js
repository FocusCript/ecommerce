import { SIGN_IN, LOGOUT } from '../actions/action_types'

const initialUserState = {
    username: '',
    email: '',
    password: '',
    id: '',
    info: {
        country: '',
        adress: '',
        phone: ''
    },
    signedIn: false,
}

const userReducer = (state = initialUserState, action) => {
    switch(action.type){
        case SIGN_IN: {
            return {username: 'USER', email: action.payload.email, password: action.payload.password, signedIn: action.payload.signedIn, info: {}}
        }
        case LOGOUT: {
            return {
                username: '',
                email: '',
                password: '',
                id: '',
                info: {},
                signedIn: false,
            }
        }

        default: return state
    }
}


export default userReducer