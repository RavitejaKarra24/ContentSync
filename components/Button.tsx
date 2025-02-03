"use client"
import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps{
    name: string;
}

const Button:React.FC<ButtonProps> = ({name}) => {
    const router = useRouter();
    return(
        <div className="mx-8">
            <button onClick={() => router.push(`/${name}`) }>
            {name} 
            </button>
        </div>
    )
}

export default Button;
