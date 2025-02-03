"use client"
import { useRouter } from "next/navigation";
import React from "react";

interface MainButtonProps{
    name: string;
}
const MainButton: React.FC<MainButtonProps>= ({name}) => {
    const router = useRouter();
    return(
        <button className="bg-gray-900 rounded-md px-32 py-44" onClick={() => router.push(`${name}`)}>
                <h1>{name}</h1>
        </button>
    )
}

export default MainButton;
