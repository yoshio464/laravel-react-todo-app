import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { TaskPage } from './pages/tasks'
import { HelpPage } from './pages/help'
import { LoginPage } from './pages/login'
import axios from 'axios'

export const Routers: React.FC = () => {

    useEffect(() => {
        axios.post('api/login',{
            email: 'admin@gmail.com',
            password: '12345'
        }).then(response => {
            console.log(response);
        })
    }, [])
    return (
        <>
            <header className="global-head">
            <ul>
                <li><Link to="/">ホーム</Link></li>
                <li><Link to="/help">ヘルプ</Link></li>
                <li><Link to="/login">ログイン</Link></li>
                <li><span>ログアウト</span></li>
            </ul>
            </header>
            <Routes>
                <Route path="/" element={<TaskPage />}/>
                <Route path="/help" element={<HelpPage />}/>
                <Route path="/login" element={<LoginPage />}/>
            </Routes>
        </>
    )
}
