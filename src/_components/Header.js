"use client"
import {  useTheme } from "@/_context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){
    const {dark, toggleTheme} = useTheme()
    console.log(dark);
    
    const pathname = usePathname()
    return(
        <div className={dark ? `px-40 py-5 my-8 mx-32 rounded-xl bg-gray-700 sticky top-0` : `px-40 py-5 my-8 mx-32 rounded-xl bg-gray-200 sticky top-0`}>
            <nav>

            <ul  className="flex flex-row justify-center items-center gap-40 font-extrabold text-2xl">
                <li><Link className={pathname === "/" ? `text-blue-700` : ``} href="/">Home</Link></li>
                <li><Link className={pathname === "/service" ? `text-blue-700` : ``} href="/service">Service</Link></li>
                <li><Link className={pathname === "/abouts" ? `text-blue-700` : ``} href="/abouts">Abouts</Link></li>
                <li><button onClick={toggleTheme} className={dark ? `text-white` : `text-black`}>{dark ? "Light" : "Dark"}</button></li>
            </ul>
            </nav>
        </div>
    )
}