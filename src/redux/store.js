import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, messages: 'Hey, my name is Max', likesCount: 12 },
                { id: 2, messages: "It's my first post", likesCount: 11 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogPage: {
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
        },
        sidebar: {
            friends: [
                { id: 1, friend: 'Max' },
                { id: 1, friend: 'Pasha' },
                { id: 1, friend: 'Tanya' }
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}



export default store;