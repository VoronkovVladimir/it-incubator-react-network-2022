export type PostPropsType = {
    id: number
    message: string
    like: number
}
export type DialogPropsType = {
    id: number
    name: string
}
export type FriendPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostPropsType>
}
export type DialogsPageType = {
    messages: Array<MessagePropsType>
    dialogs: Array<DialogPropsType>
}
export type SidebarType = {
    friends: Array<FriendPropsType>
}

export type StatePropsType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

let state = {
    dialogsPage: {
        messages: [
            {id: 1, message: 'HI'},
            {id: 2, message: 'How is your it'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo!!!'},
            {id: 5, message: 'ПРИВЕТ БРО'},

        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
            {id: 7, name: 'Vova'},
            {id: 8, name: 'Самурай'},
        ],
    },
    profilePage: {
        posts: [
            {id: 1, message: 'HI! How are you?', like: 5},
            {id: 2, message: 'Its OK', like: 4},
            {id: 3, message: 'YO', like: 3},
            {id: 4, message: 'YO!!!', like: 2},
            {id: 5, message: 'ИНКУБАТОР', like: 1000},
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Masha'},
            {id: 4, name: 'Pasha'},
            {id: 4, name: 'Dasha'},
            {id: 4, name: 'Dima'},
        ]
    }
}

export default state