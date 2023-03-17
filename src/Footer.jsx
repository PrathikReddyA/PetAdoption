import './Footer.css'

function Footer(){
    return (
        <footer className="footer">
            <h3 className='footer__text'>Contact us on our social media</h3>
            <ul className="footer__list ">
                <li><a className='footer__social gg-instagram' href="https://www.instagram.com/catadoptpdx/?hl=en" target='_blank'></a></li>
                <li><a className='footer__social gg-facebook' href="https://www.facebook.com/people/Adopt-dont-shop-MA-cats/100057515496590/" target='_blank'></a></li>
               
            </ul>
            <div className='copyright'>Copyright © 2021-2022 All rights reserved</div>
        </footer>
    );
}

export default Footer;