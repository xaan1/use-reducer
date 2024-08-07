
  export const InitialState = {
    auth : {
        isAuth : false,
        CurrentUser : null
    },

    user : [],
    notes : [],
    comment : []

}




  export function Reducer(state, action) {

    switch (action.type) {

        case 'SIGNUP':

            return {
                ...state,
                user: [...state.user, action.payload]
            }


        case 'LOGIN':


        const user =  state.user.find(user => user.username === action.payload.username && user.password === action.payload.password)




            return {
                ...state,
                auth: {
                    isAuth: true,
                    CurrentUser: user
                }
            }


        case 'LOGOUT': 

        return {
            ...state,
            auth: {
                isAuth: false,
                CurrentUser: null
            }
        }



        case 'ADD_NOTE':


        return {
            ...state,

            notes: [...state.notes, action.payload]
        }

        case 'DELETE_NOTE':

        return {
            ...state,
            notes: state.notes.filter(note => note.id !== action.payload)
        }


        case  "UPDATE_NOTE":
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? action.payload : note )
            }







            default:
                return state
    }

}