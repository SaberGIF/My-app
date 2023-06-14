const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: "Wassup. How's your day?" },
        { id: 2, message: 'Yoooo' },
        { id: 3, message: 'Biu' },
        { id: 4, message: 'Sup' }
    ],
    newMessageBody: '',
    dialogs: [
        { id: 1, name: 'Max' },
        { id: 2, name: 'Pasha' },
        { id: 3, name: 'Anton' },
        { id: 4, name: 'Tanya' }
    ]
}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messages: [...state.messages,{id: 5, message: body}]
            };
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;
