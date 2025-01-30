import React from "react";

const Header: React.FC = () => {
    return(
        <div className="font-bold flex justify-end m-4">
        <hr className="bg-white"/>
        <div className="mr-60">
        ContentSync
        </div>
        
        <div className="flex items-center">
        <div className="mx-4">
        Home
        </div>
        <div className="mx-4">
        About
        </div>
        <div className="mx-4">
        Account
        </div>
        </div>
        </div>
    );
}

export default Header;
