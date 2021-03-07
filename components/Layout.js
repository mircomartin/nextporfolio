import { Navbar } from "./Navbar"
import Head from "next/head"

export const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className="container">
                {children}
            </div>
        </>
    )
}
