const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: "Wassup. How's your day?" },
        { id: 2, message: 'Yoooo' },
        { id: 3, message: 'Biu' },
        { id: 4, message: 'Sup' }
    ],
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
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages,{id: 5, message: body}]
            };
        default:
            return state
    }
}

export const sendMessage = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer;
