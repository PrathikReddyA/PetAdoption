import Nav from './Nav';
import './Header.css';

function Header({ onNav }){
    return (
        <header className="header">
            <h1 className="header__title">Cats for adoption</h1>
            <Nav onNav={onNav} className="header__nav"/>
        </header>
    );
}

export default Header;