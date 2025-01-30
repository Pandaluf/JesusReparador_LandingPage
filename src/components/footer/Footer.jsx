import './Footer.css'
import facebookLogo from '../../assets/images/facebook_Logo.png'
import whatsappLogo from '../../assets/images/Whatsapp_Logo_1.png'
import Logo from '../../assets/images/Logo_JR.png';

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Jesus Reparador logo" className="footer__logo"/>
            <div className="footer__content">
                <p className="footer__title">Solicita información</p>
                <p className="footer__paragraph">WhatsApp: <a href="https://bit.ly/3jGAtPn">961 814 053</a></p>
                <a href="https://bit.ly/3jGAtPn"
                   target="_blank"
                   rel="noopener noreferrer"
                ><img className="footer__image-marginBottom" src={whatsappLogo} alt="WhatsApp logo" height={90} /></a>
            </div>
            <div className="footer__content">
                <p className="footer__title">¡Siguenos en nuestra red social!</p>
                <a href="https://www.facebook.com/profile.php?id=100046664115676"
                   target="_blank"
                   rel="noopener noreferrer"
                ><img className="footer__image-marginTop" src={facebookLogo} alt="Facebook Logo" height={90}/></a>
            </div>
        </footer>
    );
}

export default Footer