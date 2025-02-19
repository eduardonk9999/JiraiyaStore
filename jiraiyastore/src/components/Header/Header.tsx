"use client"

import { Geist_Mono } from "next/font/google"
import { CartControl } from "../CartControl/CartControl"
import Logo from "../Logo/Logo"
import { PrimaryInputSearchIcon } from "../PrimaryInputSearchIcon/PrimaryInputSearchIcon"
import TagHeader from "./Header.styles"

interface HeaderProps {

}

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function Header(props : HeaderProps) {
    return(
        <TagHeader>
            <Logo>
                ero-sennin books
            </Logo>
            <div>
                <PrimaryInputSearchIcon 
                    placheholder="Buscar"
                />
                <CartControl />
            </div>
        </TagHeader>
    )
}