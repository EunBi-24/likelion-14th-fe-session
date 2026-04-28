import React from "react";
import Profile from "./components/profile.jsx"

function App() {
    return (
        <div>
            <Profile 
            img="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/f8Qi/image/nB2ho0vRYaBFs2bJiVcwEINfbcU.jpg"
            mood="행복해"
            message="오늘의 한마디"
            name="나"/>
        </div>
    )
}

export default App;