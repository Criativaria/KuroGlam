import Logo from "./logo/Logo";
import './Header.css';
import Navbar from "./navbar/NavBar";

export function Header(props) {


    return (
        <header className="header">
            <div className="header-div">
                <Logo className='logo' />
                <Navbar {...props} className='navbar' />

            </div>
        </header>

    )
}