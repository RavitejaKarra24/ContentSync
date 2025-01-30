import React from "react";

interface MainButtonProps{
    name: string;
}
const MainButton: React.FC<MainButtonProps>= ({name}) => {
    return(
        <div className="bg-gray-900 rounded-md px-32 py-44">
            <h1>{name}</h1>
        </div>
    )
}

export default MainButton;
