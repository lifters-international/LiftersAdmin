import './App.css';
import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import { LoggedInLayout, NotFound404 } from './components';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={(
                    <LoggedInLayout>
                        <div>
                            <h1>Home</h1>
                        </div>
                    </LoggedInLayout>
                )} />

                <Route path="/login" element={(
                    <div>
                        <h1>Login</h1>
                    </div>
                )} />

                <Route path="/register" element={(
                    <div>
                        <h1>Register</h1>
                    </div>
                )} />

                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </Provider>
    );
}

export default App;