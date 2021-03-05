import { Navbar } from "./Navbar"

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
