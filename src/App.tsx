import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageItemPropsType} from "./components/Dialogs/Message/Message";
import {StatePropsType} from "./redux/state";

type PropsType = {
    appState: StatePropsType
}

function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friendsState={props.appState.sidebar.friends}/>
                <div className='app-wrapper-content '>
                    <Routes>
                        <Route path='/dialogs/*' element={
                            <Dialogs
                                dialogsState={props.appState.dialogsPage} />}
                        />
                        <Route path='/profile/*' element={
                            <Profile
                                profileState={props.appState.profilePage}
                            />}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
