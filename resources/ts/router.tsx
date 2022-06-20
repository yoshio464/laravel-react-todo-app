import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { TaskPage } from './pages/tasks'
import { HelpPage } from './pages/help'
import { LoginPage } from './pages/login'

export const Routers: React.FC = () => {
    return (
        <>
            <header className="global-head">
            <ul>
                <li><Link to="/">ホーム</Link></li>
                <li><Link to="/help">ヘルプ</Link></li>
                <li><Link to="/login">ログアウト</Link></li>
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
