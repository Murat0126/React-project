import React from "react";

function MainPage(){
    console.log(process.env.DB_ENGINE);
    return (
        <div>
            <h1>My React App!</h1>
        </div>
    );
}

export default MainPage;