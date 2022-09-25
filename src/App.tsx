import './App.css';
import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import { Home, NotFound404, Register, Login } from './components';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={(
                    <Home />
                )} />

                <Route path="/login" element={(
                    <Login />
                )} />

                <Route path="/register" element={(
                    <Register />
                )} />

                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </Provider>
    );
}

export default App;