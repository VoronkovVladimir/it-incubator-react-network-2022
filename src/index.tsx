import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
    {id: 1, message: 'HI! How are you?', like: 5},
    {id: 2, message: 'Its OK', like: 4},
    {id: 3, message: 'YO', like: 3},
    {id: 4, message: 'YO!!!', like: 2},
]

const dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
    {id: 7, name: 'Vova'},
]

const messages = [
    {id: 1, message: 'HI'},
    {id: 2, message: 'How is your it'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo!!!'},
]

ReactDOM.render(
    <React.StrictMode>
        <App
            posts={posts}
            dialogs={dialogs}
            messages={messages}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
