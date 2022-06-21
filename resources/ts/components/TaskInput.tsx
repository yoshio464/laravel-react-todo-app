import React from 'react'

export const TaskInput: React.FC = () => {
    return (
        <form className="input-form">
            <div className="inner">
                <input type="text" className="input" placeholder="TODOを入力してください。" value="" />
                <button className="btn is-primary">追加</button>
            </div>
        </form>
    )
}
