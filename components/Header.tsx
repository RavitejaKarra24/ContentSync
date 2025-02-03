import React from "react";
import Button from "./Button";

const Header: React.FC = () => {
    return(
        <div className="font-bold flex justify-end m-4">
        <hr className="bg-white"/>
        <div className="mr-60">
        ContentSync
        </div>
        
        <div className="flex items-center mr-4">
        <Button name="Home"/>
        <Button name="About"/>
        <Button name="Account"/>
        </div>
        </div>
    );
}

export default Header;
