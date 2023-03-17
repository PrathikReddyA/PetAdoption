import './Nav.css'
import './Header.css'
import menu from './menu';

function Nav({className, onNav}){
    
    const list = menu.map( item => {
        return (
            <li className="nav__item" key={item.name}>
                <a className="nav__link" href={item.path}
                onClick = { onNav }
                >
                    {item.name}
                </a>
            </li>
        );
    });

    return (
        <>
            <input className = "menu" type="checkbox"/>
            <div className="ham__drop__menu">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <nav className={`nav ${className}`}>
                <ul className="nav__list">
                    {list}
                </ul>
            </nav>
            
        </>
    );
}

export default Nav;