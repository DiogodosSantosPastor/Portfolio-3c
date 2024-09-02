import Navbar from "./Navbar"

export default function Header(){
    return(
        <header className="container-header">
            <img src="../public/logo.png" alt="" />
            <h1>Your friend You</h1>
            <Navbar />
        </header>
    )
}