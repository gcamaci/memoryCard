import React from "react";
import pokelogo from '../assets/images/pokelogo.png'

export default function Header(){
    return (
        <header className=' w-full h-36 bg-primary flex justify-center items-center text-7xl shadow shadow-black mb-1'>
            <div>
               <img src={pokelogo} alt="logo"></img>
            </div>
        </header>
    )
}